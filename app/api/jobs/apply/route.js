import { NextResponse } from "next/server";
import { unlink } from "node:fs/promises";
import path from "node:path";
import getMongoClient from "@/lib/mongodb";
import { saveUploadedFile, RESUME_DIR, PHOTO_DIR } from "@/lib/uploads";
import { jobCategories } from "@/data/jobCategories";

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

function textField(formData, key) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fullName = textField(formData, "fullName");
  const email = textField(formData, "email");
  const phone = textField(formData, "phone");
  const category = textField(formData, "category");
  const resume = formData.get("resume");

  if (!fullName || !email || !phone || !category) {
    return NextResponse.json(
      { error: "Full name, email, phone, and job category are required." },
      { status: 400 }
    );
  }

  if (!jobCategories.some((c) => c.id === category)) {
    return NextResponse.json({ error: "Invalid job category." }, { status: 400 });
  }

  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "A resume file is required." }, { status: 400 });
  }

  if (!ALLOWED_RESUME_TYPES.includes(resume.type)) {
    return NextResponse.json(
      { error: "Resume must be a PDF or Word document (.pdf, .doc, .docx)." },
      { status: 400 }
    );
  }

  if (resume.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: "Resume must be under 5MB." }, { status: 400 });
  }

  const photo = formData.get("photo");
  if (photo instanceof File && photo.size > 0) {
    if (!ALLOWED_PHOTO_TYPES.includes(photo.type)) {
      return NextResponse.json(
        { error: "Photo must be a JPG, PNG, or WEBP image." },
        { status: 400 }
      );
    }
    if (photo.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Photo must be under 5MB." }, { status: 400 });
    }
  }

  const resumeFile = await saveUploadedFile(resume, RESUME_DIR);
  const photoFile =
    photo instanceof File && photo.size > 0 ? await saveUploadedFile(photo, PHOTO_DIR) : null;

  const application = {
    fullName,
    email,
    phone,
    currentLocation: textField(formData, "currentLocation"),
    category,
    specificRole: textField(formData, "specificRole"),
    experienceLevel: textField(formData, "experienceLevel"),
    highestQualification: textField(formData, "highestQualification"),
    preferredCountry: textField(formData, "preferredCountry"),
    passportStatus: textField(formData, "passportStatus"),
    coverMessage: textField(formData, "coverMessage"),
    resumeFile,
    photoFile,
    status: "new",
    createdAt: new Date(),
  };

  try {
    const client = await getMongoClient();
    const db = client.db();
    const result = await db.collection("applications").insertOne(application);

    return NextResponse.json({ success: true, id: result.insertedId.toString() });
  } catch (err) {
    console.error("Failed to save job application:", err);
    // Avoid leaving orphaned uploads if the database write failed.
    await unlink(path.join(RESUME_DIR, resumeFile.filename)).catch(() => {});
    if (photoFile) {
      await unlink(path.join(PHOTO_DIR, photoFile.filename)).catch(() => {});
    }
    return NextResponse.json(
      { error: "Failed to save your application. Please try again shortly." },
      { status: 500 }
    );
  }
}

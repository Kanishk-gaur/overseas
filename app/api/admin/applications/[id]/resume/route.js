import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { readFile } from "node:fs/promises";
import path from "node:path";
import getMongoClient from "@/lib/mongodb";
import { RESUME_DIR, PHOTO_DIR } from "@/lib/uploads";

export async function GET(request, { params }) {
  const { id } = await params;
  let objectId;
  try {
    objectId = new ObjectId(id);
  } catch {
    return NextResponse.json({ error: "Invalid application id." }, { status: 400 });
  }

  const { searchParams } = new URL(request.url);
  const wantsPhoto = searchParams.get("type") === "photo";
  const field = wantsPhoto ? "photoFile" : "resumeFile";
  const dir = wantsPhoto ? PHOTO_DIR : RESUME_DIR;

  let application;
  try {
    const client = await getMongoClient();
    const db = client.db();
    application = await db
      .collection("applications")
      .findOne({ _id: objectId }, { projection: { [field]: 1 } });
  } catch (err) {
    console.error("Failed to fetch application file metadata:", err);
    return NextResponse.json({ error: "Failed to load file." }, { status: 500 });
  }

  const file = application?.[field];
  if (!file?.filename) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  let buffer;
  try {
    buffer = await readFile(path.join(dir, path.basename(file.filename)));
  } catch {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": file.mimeType || "application/octet-stream",
      "Content-Disposition": `inline; filename="${encodeURIComponent(file.originalName || file.filename)}"`,
    },
  });
}

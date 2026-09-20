import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { unlink } from "node:fs/promises";
import path from "node:path";
import getMongoClient from "@/lib/mongodb";
import { RESUME_DIR, PHOTO_DIR } from "@/lib/uploads";
import { applicationStatuses } from "@/data/jobCategories";

function parseId(id) {
  try {
    return new ObjectId(id);
  } catch {
    return null;
  }
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const objectId = parseId(id);
  if (!objectId) {
    return NextResponse.json({ error: "Invalid application id." }, { status: 400 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!applicationStatuses.includes(body?.status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  try {
    const client = await getMongoClient();
    const db = client.db();
    await db
      .collection("applications")
      .updateOne({ _id: objectId }, { $set: { status: body.status } });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update application status:", err);
    return NextResponse.json({ error: "Failed to update status." }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const objectId = parseId(id);
  if (!objectId) {
    return NextResponse.json({ error: "Invalid application id." }, { status: 400 });
  }

  try {
    const client = await getMongoClient();
    const db = client.db();
    const application = await db.collection("applications").findOne({ _id: objectId });

    if (application) {
      const filesToRemove = [
        application.resumeFile && { file: application.resumeFile, dir: RESUME_DIR },
        application.photoFile && { file: application.photoFile, dir: PHOTO_DIR },
      ].filter(Boolean);

      for (const { file, dir } of filesToRemove) {
        await unlink(path.join(dir, path.basename(file.filename))).catch(() => {});
      }
      await db.collection("applications").deleteOne({ _id: objectId });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete application:", err);
    return NextResponse.json({ error: "Failed to delete application." }, { status: 500 });
  }
}

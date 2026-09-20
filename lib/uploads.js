import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export const UPLOAD_ROOT = path.join(process.cwd(), "uploads");
export const RESUME_DIR = path.join(UPLOAD_ROOT, "resumes");
export const PHOTO_DIR = path.join(UPLOAD_ROOT, "photos");

function safeExtension(filename) {
  const ext = path.extname(filename || "");
  // Keep it short and alphanumeric-only to avoid path tricks via a crafted filename.
  return /^\.[a-zA-Z0-9]{1,10}$/.test(ext) ? ext : "";
}

export async function saveUploadedFile(file, dir) {
  await mkdir(dir, { recursive: true });
  const filename = `${randomUUID()}${safeExtension(file.name)}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), buffer);

  return {
    filename,
    originalName: file.name,
    mimeType: file.type || "application/octet-stream",
    size: file.size,
  };
}

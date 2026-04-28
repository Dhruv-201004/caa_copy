import { mkdir, writeFile } from "fs/promises";
import path from "path";

function sanitizeFileName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
}

export async function saveUploadedFile(file: File, folder = "uploads") {
  if (!file.type.startsWith("image/")) {
    throw new Error("Only image uploads are supported.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const safeName = sanitizeFileName(file.name || "image");
  const fileName = `${Date.now()}-${safeName}`;
  const uploadDir = path.join(process.cwd(), "public", folder);
  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, fileName), buffer);
  return `/${folder}/${fileName}`;
}

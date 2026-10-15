import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const sourceDirectory = path.join(projectRoot, "project-images-src");
const outputDirectory = path.join(projectRoot, "public", "projects");

let files;
try {
  files = await readdir(sourceDirectory);
} catch (error) {
  throw new Error(
    `Could not read screenshot source directory: ${sourceDirectory}`,
    {
      cause: error,
    },
  );
}

const sourceImages = files.filter((file) => /\.png$/i.test(file)).sort();
if (sourceImages.length === 0) {
  throw new Error(`No PNG screenshots found in ${sourceDirectory}.`);
}

await mkdir(outputDirectory, { recursive: true });

for (const file of sourceImages) {
  const slug = path.basename(file, path.extname(file)).toLowerCase();
  const sourcePath = path.join(sourceDirectory, file);
  const outputPath = path.join(outputDirectory, `${slug}.webp`);

  await sharp(sourcePath).webp({ quality: 82, effort: 6 }).toFile(outputPath);

  // console.log(`Optimized ${file} -> public/projects/${slug}.webp`);
}

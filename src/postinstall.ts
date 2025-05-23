import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const packageRoot = path.resolve(__dirname, "..");
const projectRoot = process.cwd();
const fileName = ".commitlintrc.json";

const sourcePath = path.join(packageRoot, fileName);
const targetPath = path.join(projectRoot, fileName);

// Copy if not already there
try {
  if (!fs.existsSync(targetPath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ Copied ${fileName} to your project root.`);
  } else {
    console.log(`⚠️  ${fileName} already exists. Skipping copy.`);
  }
} catch (err) {
  console.error(`❌ Failed to copy ${fileName}:`, err);
}

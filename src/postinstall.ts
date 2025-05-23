import * as fs from "fs";
import * as path from "path";

// Make the message more visible by adding multiple lines
console.log("\n======================================");
console.log("🚀 Running my-tools postinstall");
console.log("======================================\n");

// Get the path to the .commitlintrc.json file in this package
const sourceConfigPath = path.resolve(__dirname, "../.commitlintrc.json");

// Get the destination path - the root of the project where this package is installed
// When the package is installed as a dependency, process.cwd() should be the project root
const destinationConfigPath = path.resolve(process.cwd(), ".commitlintrc.json");

// Check if the source file exists
if (fs.existsSync(sourceConfigPath)) {
  try {
    // Read the source file
    const configContent = fs.readFileSync(sourceConfigPath, "utf8");

    // Write to destination
    fs.writeFileSync(destinationConfigPath, configContent);
    // Create a log file as a visual indicator that setup completed
    fs.writeFileSync(path.resolve(process.cwd(), "my-tools-setup.log"), `Setup completed at ${new Date()}`);
    console.log("✅ Successfully copied .commitlintrc.json to project root");
  } catch (error) {
    console.error("❌ Error copying .commitlintrc.json:", error);
  }
} else {
  console.error("❌ Source .commitlintrc.json not found at:", sourceConfigPath);

  // Fallback - try to find the file in the package itself
  const alternateSourcePath = path.resolve(__dirname, "../.commitlintrc.json");
  if (fs.existsSync(alternateSourcePath)) {
    try {
      const configContent = fs.readFileSync(alternateSourcePath, "utf8");
      fs.writeFileSync(destinationConfigPath, configContent);
      console.log("✅ Successfully copied .commitlintrc.json to project root (from alternate path)");
    } catch (error) {
      console.error("❌ Error copying from alternate path:", error);
    }
  }
}

// Pre-deployment build script
async function main() {
  console.log("Running pre-deployment tasks...");
  
  // Build the curriculum
  const makeProcess = new Deno.Command("make", {
    args: ["-C", "curriculum"],
    stdout: "inherit",
    stderr: "inherit",
  });
  const makeResult = await makeProcess.output();
  
  if (makeResult.code !== 0) {
    throw new Error("Failed to build curriculum");
  }

  // Create static directory and copy files
  try {
    await Deno.mkdir("static", { recursive: true });
    await Deno.copyFile("curriculum/build/main.pdf", "static/jordimanyercv.pdf");
    await Deno.copyFile("curriculum/publications.bib", "static/publications.bib");
    console.log("Successfully copied CV and publications files");
  } catch (error) {
    console.error("Error copying files:", error);
    throw error;
  }

  // Run the Fresh build
  const buildProcess = new Deno.Command("deno", {
    args: ["run", "-A", "dev.ts", "build"],
    stdout: "inherit",
    stderr: "inherit",
  });
  const buildResult = await buildProcess.output();

  if (buildResult.code !== 0) {
    throw new Error("Failed to build website");
  }
}

if (import.meta.main) {
  main();
}
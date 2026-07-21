const { spawn } = require("node:child_process");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Expected a Next.js command to run.");
  process.exit(1);
}

const child = spawn(args[0], args.slice(1), {
  env: {
    ...process.env,
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: "true",
  },
  shell: true,
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});

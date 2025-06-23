const fs = require("fs");
const path = require("path");

const resultsDir = "cypress/results";
const files = fs.readdirSync(resultsDir);
const resultFile = files.find(file => /^result-*\.json$/.test(file));
if (!resultFile) {
    console.error("❌ No result file found.");
    process.exit(1);
  }
  const reportPath = path.join(resultsDir, resultFile);
const data = JSON.parse(fs.readFileSync(reportPath, "utf8"));
console.log(data);

const summary = data?.results?.summary;

// const stats = data.stats;
// console.log("Stats found:", stats);

const message = `
/🧪 *Cypress Test Summary*
✅ Passed: ${summary.passed}
❌ Failed: ${summary.failed}
⏸️ Pending: ${summary.pending}
🚫 Skipped: ${summary.skipped}
🔢 Total Tests: ${summary.tests}
`;
console.log(message);

fs.writeFileSync("slack-message.txt", message.trim());
console.log("Slack message generated.");

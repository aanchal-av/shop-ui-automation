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

const message = `*Cypress Test Summary*\n Passed: ${summary.passed}\n Failed: ${summary.failed}\n Pending: ${summary.pending}\n Skipped: ${summary.skipped}\n Total Tests: ${summary.tests}`;
console.log(message);

const payload = {
    text: message.trim()
  };
fs.writeFileSync("slack-message.txt", JSON.stringify(payload, null, 2));
console.log("✅ slack-message.txt (JSON) generated.");

const fs = require("fs");

const reportPath = "cypress/reports/mochawesome/result.json";

if (!fs.existsSync(reportPath)) {
  console.error("No result.json found.");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(reportPath, "utf8"));

const stats = data.stats;

const message = `
🧪 *Cypress Test Summary*
✅ Passed: ${stats.passes}
❌ Failed: ${stats.failures}
⏸️ Pending: ${stats.pending}
⏱ Duration: ${stats.duration}ms
`;

fs.writeFileSync("slack-message.txt", message.trim());
console.log("Slack message generated.");

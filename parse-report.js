const fs = require("fs");
const path = require("path");

// const resultsDir = "cypress/results";
// const files = fs.readdirSync(resultsDir);
// console.log({files});

// const resultFile = files.find(file => /^result.json$/.test(file));
// console.log({resultFile});


  const reportFile = "cypress/results/result.json";
  
//   if (!fs.existsSync(reportPath) || !fs.statSync(reportPath).isFile()) {
//     console.error("❌ result.json does not exist or is not a file.");
//     process.exit(1);
//   }

const data = JSON.parse(fs.readFileSync(reportFile, "utf8"));
console.log(data);

const summary = data?.results?.summary;

const message = `*Cypress Test Summary*\n ✅Passed: ${summary.passed}\n ❌Failed: ${summary.failed}\n ⏸️Pending: ${summary.pending}\n 🚫Skipped: ${summary.skipped}\n 🔢Total Tests: ${summary.tests}`;
console.log(message);

const payload = {
    text: message.trim()
  };
fs.writeFileSync("slack-message.txt", JSON.stringify(payload, null, 2));
console.log("✅ slack-message.txt (JSON) generated.");

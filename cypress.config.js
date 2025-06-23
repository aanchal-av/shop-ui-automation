const { defineConfig } = require("cypress");
const { GenerateCtrfReport } = require('cypress-ctrf-json-reporter')
const { execSync } = require("child_process");
// const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions:{ 
      reportDir: "cypress/results/result.json"
    
  },

  env:{
    url: "https://rahulshettyacademy.com/client/"
  },
  
  e2e: {
    retries:{
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      new GenerateCtrfReport({
        on,
        outputDir:"cypress/results",
        // outputFile: `result-${timestamp}.json`
        outputFile: 'result.json'
      });

      on("after:run", (results) => {
        console.log("✅ Cypress run complete. Generating Slack report...",results);

        try {
          execSync("node parse-report.js", { stdio: "inherit" });
        } catch (err) {
          console.error("❌ Failed to run parse-report.js:", err.message);
        }
      });
    },
  },
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({

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
      

      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions:{
    reportDir: "cypress/reports/mochawesome",
    reportFilename: 'result',
    reportPageTitle: 'Smoke Test Report',
    overwrite: false, 
    json: true,
    html: true,
    saveAllAttempts: true
  }
});
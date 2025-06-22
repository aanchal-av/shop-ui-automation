const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    url: "https://rahulshettyacademy.com/client/"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions:{
    reportFilename: 'smoke-suite',
    reportPageTitle: 'Smoke Test Report',
    json: true,
    html: true,
    saveAllAttempts: true
  }
});
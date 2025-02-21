const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url: "https://rahulshettyacademy.com/client/"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
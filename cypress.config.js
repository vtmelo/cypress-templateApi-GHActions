const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video:true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://api-desafio-qa.onrender.com/',
    failOnStatusCode: false
  },
  watchForFileChanges : false
});

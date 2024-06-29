const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://api-desafio-qa.onrender.com/',
    failOnStatusCode: false
  },
  watchForFileChanges : false
});

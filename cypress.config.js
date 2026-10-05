const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    testIsolation: true,
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  screenshotOnRunFailure: true,
  video: false,
});


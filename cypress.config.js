const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1920,
  viewportHeight:1080,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 10000,
  experimentalWebKitSupport: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


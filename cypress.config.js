const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  retries: 2,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8080/',
    excludeSpecPattern: ['**/examples/**/*.js', '**/integration/support/**/*'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})

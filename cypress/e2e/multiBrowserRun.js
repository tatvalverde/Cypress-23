const cypress = require('cypress');

cypress.run({
    spec: 'cypress/e2e/iframe.spec.cy.js',
    browser: 'chrome'
})

cypress.run({
    spec: 'cypress/e2e/iframe.spec.cy.js',
    browser: 'edge'
})

cypress.run({
    spec: 'cypress/e2e/iframe.spec.cy.js',
    browser: 'electron'
})
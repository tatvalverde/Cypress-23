const cypress = require('cypress');

const spec = 'cypress/e2e/iframe.spec.cy.j';

cypress.run({
    spec,
    browser: 'chrome'
})

cypress.run({
    spec,
    browser: 'edge'
})

cypress.run({
    spec,
    browser: 'electron'
})
/// <reference types="cypress" />

describe('Pop-up windows', ()=> {
    it('Alert Pop-up window', () => {
    cy.visit('https://demoqa.com/alerts')
    cy.get('#alertButton').click();
    cy.on('window:alert', (str) => {
        expect(str).to.eql('You clicked a button');
    })
   })
    
   it('Confirm Pop-up window: click "Ok"', () => {
    cy.visit('https://demoqa.com/alerts')
    cy.get('#confirmButton').click();

    cy.on('window:confirm', (str) => {
        expect(str).to.eql('Do you confirm action?');
    })
    cy.get('span#confirmResult.text-success').should('contain', 'You selected ' ).and('contain', 'Ok')
})
   
    it('Alert Pop-up window: click "Cancel"', () => {
    cy.visit('https://demoqa.com/alerts')
    cy.get('#confirmButton').click();

    cy.on('window:confirm', (str) =>  false);

    cy.get('span#confirmResult.text-susses').should('contain', 'You selected ' ).and('contain', 'Ok')
    })
})// Do you confirm action?
///      <reference types="cypress"/>

describe('Examples for TOOLS QA', ()=> {

    it('displays header TOOLSQA', () => {
      cy.visit('https://demoqa.com/')
      cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')
      cy.get('div.card:first-child').click();
    })

    it("form submittion", ()=> {
        cy.get('ul.menu-list #item-0').contains('Text Box').click();

    });
});
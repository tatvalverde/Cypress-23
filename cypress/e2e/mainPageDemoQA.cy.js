///      <reference types="cypress"/>

describe('Examples for TOOLS QA', ()=> {

    it('displays header TOOLSQA', () => {
      cy.visit('https://demoqa.com/')
      cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')

      const expectedNames = [
           'Elements',
           'Forms',
           'Alerts, Frame & Windows',
           'Widgets',
           'Interactions',
           'Book Store Application',
         ];
      cy.get('div.card').should('have.length', 6).then(($els) => {
       const nameofElements = Cypress.$.makeArray($els).map(($el) => $el.innerText);
       console.log(nameofElements);
       expect(nameofElements).to.be.deep.equal(expectedNames);   // all 6 elements exist
     });

     cy.get('div.card')
            .should('have.length', 6)
            .then(($els) => {
              return Cypress.$.makeArray($els).map(($el) => $el.innerText);  // jquary
            })
            .should('deep.eql', expectedNames);
        });

      })
    

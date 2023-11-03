/// <reference types='cypress' />

// const expectedNames = [
//    'Elements',
//    'Forms',
//    'Alerts, Frame & Windows',
//    'Widgets',
//    'Interactions',
//    'Book Store Application',
//  ];
 
//  describe.skip('Test suite', () => {
//    it('First test', () => {
//      cy.visit('https://demoqa.com/');
     // cy.get('div.card:first-child').click();
     // cy.url().should('eql', 'https://demoqa.com/elements');
     // cy.get('div.main-header')
     //   .should('be.visible')
     //   .and('have.text', 'Elements');

     // cy.get('div.main-header').then(($el) => {
     //   let text = $el.text();
     //   expect(text).to.eql('Elements');   // to deeply equal Elements
     //   expect(text).to.equal('Elements');  // not stricked to equal **Elements**
     // })
 
     // cy.get('div.card').should('have.length', 6).then(($els) => {
     //   const nameofElements = Cypress.$.makeArray($els).map(($el) => $el.innerText);
     //   console.log(nameofElements);
     //   expect(nameofElements).to.be.deep.equal(expectedNames);   // all 6 elements exist
     // });
 
     // cy.get('div.card')                    // expectedNames = array go each element (loop for each)
     //   .should('have.length', 6)
     //   .each(($el, idx) => {
     //     const nameofElement = $el.text();
     //     console.log(nameofElement);
     //     expect(nameofElement).to.be.eql(expectedNames[idx]); // chai method assertion
     //   });
 
     // cy.get('div.card')
     //   .should('have.length', 6)
     //   .then(($els) => {
     //     return Cypress._.map(Cypress.$.makeArray($els), 'innerText');  // lodage library
     //   })
     //   .should('deep.eql', expectedNames); // cypress method assertion
 
//      cy.get('div.card')
//        .should('have.length', 6)
//        .then(($els) => {
//          return Cypress.$.makeArray($els).map(($el) => $el.innerText);  // jquary
//        })
//        .should('deep.eql', expectedNames);
//    });
//  });





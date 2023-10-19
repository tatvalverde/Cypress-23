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

// Svetlana 10/18/23
describe('demoQA', ()=> {
  it('', ()=> {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').type('Tatiana')
    cy.get('#lastName').type('Nano').clear().type('Naumova')
    cy.get('#userEmail').type('test@gmail.com')
    cy.get('#gender-radio-2').check({force: true}).should('be.checked');
    cy.get('#gender-radio-1').should('not.be.checked');
    cy.get('#userNumber').type('123456789')
    cy.get('#dateOfBirthInput').click()
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('October').should('have.value', '9')
    cy.get('.react-datepicker__year-select').select('2023').should('have.value', '2023')
    cy.get('.react-datepicker__year-select').select('2023').should('have.value', '2023')
    cy.get('.react-datepicker__day ').contains('10').click()
    cy.get('#subjectsInput').type('Maths').type('{enter}')
    cy.get('#hobbies-checkbox-1').check({force: true}).should('be.checked');
    // cy.get('#uploadPicture').selectFile('C:\Cypress 23\cypress\fixtures\cat.jpg')
    cy.get('#uploadPicture').attachFile('cat.jpg')
    cy.get('#currentAddress').type('555 Woodruff Ln.')
    cy.get('#state').click({force: true})
    cy.get('[id^="react-select-3-option-"]').then($els => {
      const state = Cypress.$.makeArray($els).filter($el =>$el.innerText == 'NCR')
      return cy.wrap(state)
  }).click();
  cy.get('[id^="react-select-3-option-"]').then($els => {
    const state = Cypress.$.makeArray($els).filter($el =>$el.innerText == 'NCR')
    return cy.wrap(state)
}).click();
  })
})
// #react-select-3-input
// cy.get('[id^="react-select-3-option-"]').then($els => {
//   const state = Cypress.$.makeArray($els).filter($el =>$el.innerText == 'NCR')
//   return cy.wrap(state)
// }).click();
// cy.get('[id^="react-select-4-option-"]').then($els => {
//   const state = Cypress.$.makeArray($els).filter($el =>$el.innerText == 'Noida')
//   return cy.wrap(state)
// }).click();
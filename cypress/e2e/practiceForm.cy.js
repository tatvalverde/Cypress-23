/// <reference types='cypress' />

describe('Fill out Student Registration Form', ()=> {

  
    it('', ()=> {
      cy.visit('https://demoqa.com/automation-practice-form')
      cy.viewport(1920, 1080)

      cy.get('#firstName').should('have.text', '')
      cy.get('#firstName').type('Tatiana').should('have.value', 'Tatiana')

      cy.get('#lastName').should('have.text', '')
      cy.get('#lastName').type('Nano').clear().type('Naumova').should('have.value', 'Naumova')

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

  //     cy.get('div#state  .css-1hwfws3').then($els => {
  //     const state = Cypress.$.makeArray($els).filter($el =>$el.innerText == 'NCR')
  //     return cy.wrap(state)
  // }).click();

  //   cy.get('#stateCity-wrapper > :nth-child(3)').then($els => {
  //     const state = Cypress.$.makeArray($els).filter($el =>$el.innerText == 'Noida')
  //     return cy.wrap(city)
  // }).click()
      cy.get('button#submit').click();
  })
})
/// <reference types='cypress' />

describe('Fill out Student Registration Form', ()=> {

    beforeEach(function() {
      cy.fixture('secondReview').then((userInfo)=>{
        this.allNames = userInfo.formData;
      })
    })
      
    it('Fill out Student Registration Form: fixtures 1 version', function() {
      cy.visit('https://demoqa.com/automation-practice-form')
      cy.viewport(1980, 1080);

      cy.get('#firstName').should('have.text', '')
      cy.get('#firstName').type(this.allNames.firstName).should('have.value', this.allNames.firstName)

      cy.get('#lastName').should('have.text', '')
      cy.get('#lastName').type(this.allNames.lastName).should('have.value', this.allNames.lastName)

    
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
      cy.get('#react-select-3-input').click({force: true});
      cy.get('[id^="react-select-3-option-"]').then($elements => {
            const state = Cypress.$.makeArray($elements).filter($el => $el.innerText === 'NCR') 
            return cy.wrap(state)
      }).click();

      cy.get('#city').click({force: true})
      cy.get('#react-select-4-input').click({force: true});
      cy.get('[id^="react-select-4-option-"]').then($elements => {
            console.log($elements)
            const city = Cypress.$.makeArray($elements).filter($el => $el.innerText === 'Delhi') 
            return cy.wrap(city)
      }).click({force: true});

      cy.get('#submit').click({force: true});
      
      cy.get('#example-modal-sizes-title-lg').should('be.visible').should('have.text', 'Thanks for submitting the form');

      cy.get('#closeLargeModal').click();
  })
})

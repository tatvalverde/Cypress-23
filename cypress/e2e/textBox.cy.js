///      <reference types="cypress"/>

  const outputText = 'Name:Testing NameEmail:testingname@example.comCurrent Address :1234 Main Street, Washington DC Permananet Address :1234 Main Street, Washington DC';

describe('Text Box in Elements page', ()=> {

    before( () => {
      cy.visit('https://demoqa.com/')
      cy.get('div.card:first-child').click();
      cy.url().should('eql', 'https://demoqa.com/elements');
      cy.get('div.main-header')
       .should('be.visible')
       .and('have.text', 'Elements');
    })
//            describe("Elements", () => {
//                beforeEach(() => {
//                  cy.clearAllCookies();
//                  cy.clearAllLocalStorage();
//                  cy.clearAllSessionStorage();
//                  cy.visit("https://demoqa.com/");
//                  cy.get("div.card:nth-child(1)").click();
//                  cy.url().should("eql", "https://demoqa.com/elements");
//                  cy.get("li#item-0").contains("Text Box").click();
//             });

    it("Header-Bottom Text Box exists", ()=> {
        cy.get('ul.menu-list #item-0').contains('Text Box').click();
        cy.get('.main-header').should('be.visible').and('have.text', 'Text Box');
        cy.get('#userForm').should('exist');
    })

    describe('Verification Text Box form in Text Box page', ()=> {
      beforeEach( () => {
        cy.visit('https://demoqa.com/text-box')
      })

    it('Verify in Text Box page all elements with correct names.', () => {
        cy.get('#userName-label.form-label').should('exist')
          .should('have.text', 'Full Name')
        cy.get('#userEmail-label').should('exist')
          .should('have.text', 'Email')
        cy.get('#currentAddress-label').should('exist')
          .should('have.text', 'Current Address')
        cy.get('#permanentAddress-label').should('exist')
          .should('have.text', 'Permanent Address')
    })

    it('Verify that input fields have placeholders with correct value(property)',() => {
        cy.get('input#userName').should('have.attr', 'placeholder', 'Full Name')
        cy.get('#userEmail').should('have.attr', 'placeholder', 'name@example.com')
        cy.get('#currentAddress').should('have.attr', 'placeholder', 'Current Address')
        cy.get('#permanentAddress').should('exist')
    })

    it('Validation for Email-input field', ()=>{
        cy.get('#userEmail').type('example')
        cy.get('#submit').click()
        cy.get('.field-error').should('be.visible')
    
        cy.get('#userEmail').type('@')
        cy.get('#submit').click()
        cy.get('.field-error').should('be.visible')
    
        cy.get('#userEmail').type('test')
        cy.get('#submit').click()
        cy.get('.field-error').should('be.visible')
    
        cy.get('#userEmail').type('.')
        cy.get('#submit').click()
        cy.get('.field-error').should('be.visible')
    
        cy.get('#userEmail').type('com')
        cy.get('#submit').click()
        cy.get('#userEmail-wrapper > .col-md-9').should('be.visible')
    })

    it('Verify if all fields are empty and click on submit nothing appears', () => {
      cy.get("button#submit").should("be.visible").click();
      cy.get("div#output").should("not.be.visible");
  });

  it('Check button Submit (presence, text, and color)', () => {
    cy.get('button#submit').should('exist')
        .and('have.text', 'Submit')
        .and('have.css', 'background-color', 'rgb(0, 123, 255)');
});
    it('Submition Form', () => {
      cy.get('input#userName').type('Testing Name');
      cy.get('input#userEmail').type('testingname@example.com');
      cy.get('textarea#currentAddress').type('1234 Main Street, Washington DC');
      cy.get('textarea#permanentAddress').type('1234 Main Street, Washington DC');
      cy.get('button#submit').click();

      cy.get('div#output').should('exist').and('be.visible').and('have.text', outputText);
    })
   })
})
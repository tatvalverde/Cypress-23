/// <reference types="cypress" />

describe('Logo', () =>{

  it('Test case #1 Verify there is a visible logo on the page', () =>{
    cy.visit('https://getyournest.com/search')
    cy.get('a[href="/"]').should('be.visible')
  })


  it('Test case #2 User goes to the homepage if they click on the logo', ()=>{
    cy.visit('https://getyournest.com/search')
    cy.get('a[href="/"]').should('be.visible').click()
    cy.url().should('eql', 'https://getyournest.com/')
  })
})

describe('Search bar', ()=>{
  it('Test case #1 Verify there is a search bar on the page', ()=>{
    cy.visit('https://getyournest.com/search')
    cy.get('#search-bar').should('be.visible')
    .and('have.text', '')
  })

   it('Test case #2 Verify if user hovers on search bar panel the placeholder message inside will change from “Start the search of your dream house here!” to “Location (city, zip code or address)”', ()=>{
    cy.visit('https://getyournest.com/search')
    cy.get('[data-testid="search-bar"]')
    .should('have.attr', 'placeholder', 'Start the search of your dream house here!')
    .trigger('mouseover')
    cy.get('[data-testid="search-bar"]')
    .should('have.attr', 'placeholder', 'Location (city, zip code or address)')
    cy.wait(9000)
   })

   it.only('Test case #3 Verify if the user enters a letter (ex, P) the dropdown appears and all results contain p (check at list 3)', ()=>{
    cy.visit('https://getyournest.com/search')
    cy.get('[data-testid="search-bar"]').type('P')
    cy.get('p.font-nunito.text-\[16px\].htmlContentSub.font-semibold.text-cgyn-text-primary')
    .then($els => {
        const city = Cypress.$.makeArray($els).filter($el => $el.innerText === 'P') 
        return cy.wrap(city)
     }).click({force: true});
    })

   it('Test case #4 Verify if user enters only special chars the dropdown with message “Sorry, no search results found. Please try another search: address, city or zip code.” appears', ()=>{
    cy.visit('https://getyournest.com/search')
    cy.get('[data-testid="search-bar"]').type('@')
    cy.get('.font-nunito.text-\[16px\].font-semibold.text-cgyn-text-primary.text-left')
    .should('have.text', 'Sorry, no search results found. Please try another search: address, city or zip code.')

    })
})

describe('Chat', ()=>{
    it('Test case #1 When the user is on the search page the chat window is open', ()=>{
        cy.visit('https://getyournest.com/search')
        cy.get('div#modify-container').should('be.visible') 
        cy.get 
    })
})
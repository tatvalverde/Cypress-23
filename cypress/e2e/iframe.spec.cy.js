/// <reference types="cypress" />

describe('Iframe1 testing', ()=>{
    it('Click on the element in the iframe window', ()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1')
        .its('0.contentDocument')
        .its('body')
        .find('button#click_me_1').click()
        .should('have.text', 'Clicked');
    })
})

describe('Iframe2 testing', ()=>{
    it('Click on the element in the iframe window', ()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1')
        .its('0.contentDocument')
        .its('body')
        cy.get('iframe#frame2')
        .its('0.contentDocument')
        .its('body')
        .find('button#click_me_2').click()
        .should('have.text', 'Clicked');
    })
})

describe('Iframe new', ()=>{
    it.only('New iFrame: click ', ()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
        cy.get('iframe[name=globalSqa]')
        .its('0.contentDocument')
        .find('div.isotope-item')
        .eq(0)
        .click()
        cy.get('iframe[name=globalSqa]')
        .its('0.contentDocument')
        .find('div.page_heading h1')
        .should('have.text', 'Selenium 3.0 Training')
    })
})
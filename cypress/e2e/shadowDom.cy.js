/// <reference types="cypress" />

describe('Shadow DOM', () =>{
    const inputData = "Test Test"


    it('Type in the input field, 1 version', ()=>{
      cy.visit('https://selectorshub.com/xpath-practice-page/');
      cy.get('#userName')
      .shadow()
      .find('#kils')
      .type(inputData)
      .invoke('val')
      .then((text)=>{
        expect(text).to.eql(inputData)
      })
    })
     // make changes in cypress.config.js : includeShadowDom: true
    it('Type in the input field, 2 version', ()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/');
        cy.get('#kils')
        .type(inputData)
        .invoke('val')
        .then((text)=>{
          expect(text).to.eql(inputData)
        })
      })
      //
      it.only('Type in the input field, 3 version', ()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/');
        cy.get('#kils', {includeShadowDom: true})
        .type(inputData)
        .invoke('val')
        .then((text)=>{
          expect(text).to.eql(inputData)
        })
      })
})
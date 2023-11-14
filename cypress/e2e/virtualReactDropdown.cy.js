/// <reference types="cypress" />

describe('Virtual Scroll Dropdown', () =>{
    const expectedData = 'Item #89'

    it('Select particular item', ()=>{
       cy.visit('https://primereact.org/dropdown/')
       cy.get('div.doc-main section.py-4:nth-of-type(8) div.p-dropdown').click()
       searchForOption(expectedData)
       cy.get('div.doc-main section.py-4:nth-of-type(8) span.p-dropdown-label')
       .should('have.text',expectedData)

       function searchForOption(item, level = 0){
        if(level > 99) {
            throw new Error('Exceeded max recursion level')
        }

        cy.get('div.doc-main section.py-4:nth-of-type(8) span.p-dropdown-label').then(($el)=> {
            const activeObtion = $el.text();
            if(activeObtion != item) {
                cy.wrap($el).type('{downarrow}')
                searchForOption(item, ++level);
            }
            cy.wrap($el).click()
        })
       }
    })
})
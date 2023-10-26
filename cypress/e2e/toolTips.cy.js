/// <reference types='cypress' />

describe('Testing Tool Tips page', () => {
    it('Testing tool tips button', ()=> {
        cy.visit('https://demoqa.com/tool-tips');
        
        cy.get('#toolTipButton').trigger('mouseover');
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
    })

    it('Testing tool tips field', ()=> {
        cy.visit('https://demoqa.com/tool-tips');

        cy.get('#toolTipTextField').trigger('mouseover');
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the text field');
    })

})




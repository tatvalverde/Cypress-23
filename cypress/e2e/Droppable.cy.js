/// <reference types="cypress" />


describe('Droppabble', ()=> {
    it.only('Trigger method', () => {
        cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com/droppable')

    cy.get('#droppable').should('contain.text', 'Drop here');
    cy.get('#draggable')
    .trigger('mousedown', {which:1, pageX:0, pageY:0})
    .trigger('mousemove', {which:1, pageX:350, pageY:50})
    .trigger('mouseup');

    cy.get('#droppable').should('contain.text', 'Dropped!');
    
   })

   it('resize', ()=>{
    cy.visit('https://demoqa.com/resizable')

    cy.get('#resizableBoxWithRestriction').invoke('width', 300).invoke('height', 250)
    cy.get('#resizableBoxWithRestriction').should(($el)=>{
        const width = parseInt($el[0].style.width);
        console.log(width)
        expect(width).to.be.closeTo(300, 3);

        const height = parseFloat($el[0].style.height);
        console.log(height)
        expect(height).to.be.closeTo(250, 3);

    })
   })
})
/// <reference types="cypress" />


describe('Dragabble', ()=> {
    it('Trigger method', () => {
        cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com/dragabble')

    cy.get('div#dragBox')
    .trigger('mousedown', {which:1, pageX:0, pageY:0})
    .trigger('mousemove', {which:1, pageX:200, pageY:200})
    .trigger('mouseup');

    cy.get('div#dragBox').should(($el) =>{
        const coordinat = $el.position()
        console.log(coordinat)

        expect(coordinat.top).to.greaterThan(200)
        expect(coordinat.left).to.be.at.least(200)
    })
    
   })
})

// it.only('Drag me test', () => {
//     const initialPosition = {};
//     cy.visit('https://demoqa.com/dragabble');
//     cy.get('#dragBox').then($el => {
//         initialPosition.top = $el.position().top;
//         initialPosition.left = $el.position().left;
//     });
//     cy.get('#dragBox')
//         .trigger('mousedown', {which: 1, pageX: 0, pageY: 0})
//         .trigger('mousemove', {which: 1, pageX: 200, pageY: 200})
//         .trigger('mouseup');
//     cy.get('#dragBox').should(($el) => {
//         const currentPosition = $el.position(); 
//         expect(currentPosition.top - initialPosition.top).to.be.equal(200);  
//         expect(currentPosition.left - initialPosition.left).to.be.equal(200);   
//     })    
// });
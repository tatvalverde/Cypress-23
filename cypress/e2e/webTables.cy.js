/// <reference types='cypress' />

it.only('demoqa - webtables', () => {
    cy.visit('https://demoqa.com/webtables')
    const testUser = ["Tatiana", "Naumova", "50", "test@gmail.com", "6000", "QA Department"]

    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('Tatiana').should('have.value','Tatiana')
    cy.get('#lastName').type('Naumova').should('have.value','Naumova')
    cy.get('#userEmail').type('test@gmail.com').should('have.value','test@gmail.com')
    cy.get('#age').type('50').should('have.value','50')
    cy.get('#salary').type('6000').should('have.value','6000')
    cy.get('#department').type('QA Department').should('have.value','QA Department')
    cy.get('#submit').click()
    cy.get('#searchBox').type('Tatiana')
    cy.get('.rt-tbody .rt-tr:not(.-padRow)').should('have.length', 1)

    cy.get('.rt-tbody .rt-tr:not(.-padRow) .rt-td').then($els => {
        const newArr = Cypress.$.makeArray($els).map($el => $el.innerText).slice(0, -1)
        // cy.log(newArr)
        // console.log(newArr)
        // console.log(testUser)
        expect(newArr).to.be.deep.equal(testUser)
    })
    cy.get('#delete-record-4').click()
    cy.get('.rt-tbody .rt-tr:not(.-padRow)').should('not.exist')

})
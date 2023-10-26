/// <reference types='cypress' />

describe('Search your city Charlotte', () => {
    
    beforeEach('Search the City', () => {
        cy.visit('https://openweathermap.org/');
        cy.viewport(1920, 1080)

        cy.get('h1 .orange-text').should('be.visible').should('have.text', 'OpenWeather');
        cy.get('h2 .white-text').should('be.visible')
        .should('have.text', 'Weather forecasts, nowcasts and history in a fast and elegant way');
    })
    it('Test1', ()=> {
        cy.get('div .search-container').should('have.text', '');
        cy.get('div .search-container').find('[placeholder="Search city"]').should('have.attr', 'placeholder', 'Search city')
        cy.get('div .search-container').click().type('Charlotte{enter}').click({force: true});
        cy.get('')
    })

      
})
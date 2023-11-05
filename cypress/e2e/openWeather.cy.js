/// <reference types='cypress' />

describe('Search your city Charlotte', () => {
    
    beforeEach('Search the City', () => {
        cy.visit('https://openweathermap.org/');
        cy.viewport(1920, 1080)

        cy.get('h1 .orange-text').should('be.visible').should('have.text', 'OpenWeather');
        cy.get('h2 .white-text').should('be.visible')
        .should('have.text', 'Weather forecasts, nowcasts and history in a fast and elegant way');
    })
    it('Test1 fint your city', ()=> {
        cy.get('div .search-container').should('have.text', '');
        cy.get('div .search-container').find('[placeholder="Search city"]').should('have.attr', 'placeholder', 'Search city')
        cy.wait(9000)

       // Type "Charlotte" in the search input and submit the form
        cy.get('.search-container input').type('Charlotte{enter}'); // Type and press Enter

    // Add assertions for search results or relevant elements on the results page
        cy.get('.forecast-city').should('be.visible').should('contain', 'Charlotte');
          
        //cy.get('button[type="submit"]').click()
    })
      
})
/// <reference types='cypress' />

const {city,  weatherTitles } = require('../fixtures/translations.json');
const weatherParams = require('../fixtures/weatherParams.json')

describe('openWeather', { defaultCommandTimeout: 12000 }, () => {
  //Test1: verify if enter city in the search field and hit search button info appears bellow search field
  // 1. navigate to 'https://openweathermap.org/'
  // 2. enter a city in the search field
  // 3. click search
  // 4. select option from dropdown and click on it
  // 5. verify that same city appears, tempreture, feels like, Humidity, Dew point, Hourly forecast graph

  it('Verify if entering a city shows parameters: humidity, visibility, dew point, hourly forecast', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://openweathermap.org/');
    cy.get('input[placeholder="Search city"]').should('be.visible').type(city);
    cy.get('button.button-round').should('be.visible').click();
    cy.get('ul.search-dropdown-menu li:nth-child(1)').click();
    cy.get('div.current-container').contains(city);
    cy.get('span.heading').contains('°C');
    cy.get('ul.standard-padding li').each(($els, index) => {
      cy.wrap($els).should('include.text', Object.values(weatherParams)[index]);
    });
    cy.get('div.full-container')
      .parent('div')
      .find('h3')
      .contains(weatherTitles.hourlyForecast)
      .should('have.text', weatherTitles.hourlyForecast);
    cy.get('div.daily-container')
      .should('be.visible')
      .contains(weatherTitles.daysForecast)
      .should('have.text', weatherTitles.daysForecast);
  });
});


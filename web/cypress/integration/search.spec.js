/// <reference types="cypress" />

describe('Search', () => {
  it('should prompt an error if searching without a keyword', () => {
    cy.visit('/');

    cy.get('.nav-tabs').contains('Search').click();

    cy.get('#property-search-form').contains('Search').click();
    cy.get('#property-search-form').contains('please enter suburb name to search');
  });

  it('should search with keyword Carlton', () => {
    cy.get('.nav-tabs').contains('Search').click();

    cy.get('#suburb').type('Carlton');
    cy.get('#property-search-form').contains('Search').click();

    cy.get('#properties-list').contains('2403 Forster Circle, Carlton');
    cy.get('#properties-list').contains('22236 La Follette Plaza, Carlton');
    cy.scrollTo('bottom');
    cy.scrollTo('top');
  });

  it('should load all properties with empty keyword', () => {
    cy.reload();

    cy.reload(true);

    cy.get('.nav-tabs').contains('Search').click();

    cy.get('#properties-list').contains('6 Main Lane, Port Melbourne');
    cy.get('#properties-list').contains('84 Laurel Trail, South Yarra');

    cy.scrollTo('bottom');
  });
});

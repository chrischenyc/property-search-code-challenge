/// <reference types="cypress" />

describe('Home', () => {
  it('should load with default UI', () => {
    cy.visit('/');

    // tabs
    cy.get('.nav-tabs').contains('Search');
    cy.get('.nav-tabs').contains('Favourites');

    // search tab
    cy.get('.nav-tabs').contains('Search').click();

    // search form
    cy.get('#property-search-form');
    cy.get('#property-search-form').contains('Search');

    // search result list
    cy.get('#properties-list');

    // favourites tab
    cy.get('.nav-tabs').contains('Favourites').click();

    // favourites list
    cy.get('#properties-list');
  });

  it('should load persisted user state after page refresh', () => {
    cy.reload();

    cy.reload(true);
  });
});

/// <reference types="Cypress"/>

describe('HomeFilters', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

  })
})
/// <reference types="Cypress"/>

import { Login } from './Login.cy.js'

describe('HomeFilters', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')


  })
    
  it('Login and filter items', () => {
  
    Login('testuser2@yopmail.com','Testing123')
    
    cy.get('.left').should('contain','Automation')
      .url()
      .should('include','/dashboard')

      cy.get('#sidebar > form.ng-untouched > :nth-child(1) > .form-control').type('iphone')
      cy.get('#sidebar > form.ng-valid > :nth-child(2) > .row > :nth-child(1) > .form-control').type('500')
      cy.get('#sidebar > form.ng-valid > :nth-child(2) > .row > :nth-child(2) > .form-control').type('1000')
      cy.get('#sidebar > form.ng-valid > :nth-child(3) > :nth-child(3) > input').click()
      cy.get('#sidebar > form.ng-valid > :nth-child(3) > :nth-child(4) > input').click()
      cy.get('#sidebar > form.ng-valid > :nth-child(4) > :nth-child(5) > input').click()
      cy.get('.overlay-container').should('contain','No Products Found')

  });

})
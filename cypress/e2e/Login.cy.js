/// <reference types="Cypress"/>

import { Login1 } from './functions.cy.js';

describe('CypresssLogin', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

  })

  it('Displays and error when login is valid', () => {
  
    Login1('testuser2@yopmail.com','Testing123')

    cy.get('.left').should('contain','Automation')
      .url()
      .should('include','/dashboard')
    
    
  });
})
/// <reference types="Cypress"/>

import { Login1 } from './functions.cy.js';


describe('Signout', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')


  })
    
  it('Signing out', () => {
  
    Login1('testuser2@yopmail.com','Testing123')

    cy.get('.container').find('.card').should('have.length',3)
      .url()
      .should('include','/dashboard/dash')

    cy.get(':nth-child(5) > .btn').click()
    cy.get('.overlay-container').should('contain','Logout Successfully')
      .url()

    
    
  });

})
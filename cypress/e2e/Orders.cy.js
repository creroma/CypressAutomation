/// <reference types="Cypress"/>

import { Login1 } from './functions.cy.js'


describe('Orders', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')


  })
    
  it('Order items', () => {
  
    Login1('testuser2@yopmail.com','Testing123')

    // AddToCartItems()

    cy.get(':nth-child(3) > .btn').click()
      .url()
      .should('include','/myorders')

      //Viewing item on orders
      cy.get(':nth-child(1) > :nth-child(6) > .btn').click()
        .url()
        .should('include','/order-details')

        //Back to orders
        cy.get('.btn-container > .btn').click()
          .url()
          .should('include','/myorders')

  })

  it('Delete items on orders', () => {

    Login1('testuser2@yopmail.com','Testing123')

    cy.get(':nth-child(3) > .btn').click()
      .url()
      .should('include','/myorders')

      cy.get(':nth-child(1) > :nth-child(7) > .btn').click()
      cy.get('.overlay-container').should('contain','Orders Deleted Successfully')

  })

  it('Back to shop and back to cart', () => {

    Login1('testuser2@yopmail.com','Testing123')

    cy.get(':nth-child(3) > .btn').click()
      .url()
      .should('include','/myorders')

      cy.get('.offset-md-4').click()
        .url()
        .should('include','/dashboard')

      
      cy.get(':nth-child(3) > .btn').click()
      cy.get('.row > [routerlink="/dashboard/cart"]').click()
        .url()
        .should('include','/dashboard')

      

  })

})
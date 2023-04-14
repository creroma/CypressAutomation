/// <reference types="Cypress"/>

import { Login1, AddToCartItems } from './functions.cy.js';

describe('Addtocart', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

      
  })


 it('Viewing items on chart', () => {

    Login1('testuser2@yopmail.com','Testing123')
    AddToCartItems()

    cy.get(':nth-child(4) > .btn').click()
      .url()
      .should('include','/dashboard/cart')
  })
})
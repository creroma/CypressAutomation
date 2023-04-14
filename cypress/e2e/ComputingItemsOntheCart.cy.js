/// <reference types="Cypress"/>

import { Login1, ComputeItemsOnCart } from './functions.cy.js'


describe('ComputeItems', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')
      
  })


  it('Compute items from the cart', () => {

    Login1('testuser2@yopmail.com','Testing123')
    ComputeItemsOnCart()

      })


  })
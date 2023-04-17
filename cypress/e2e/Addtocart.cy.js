/// <reference types="Cypress"/>

import { Login1,ViewItems,AddToCartItems } from './functions.cy.js'


describe('Addtocart', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

      
  })

  it('Viewing items before adding to cart', () => {

    Login1('testuser2@yopmail.com','Testing123')
    ViewItems()
    AddToCartItems()
  })


})
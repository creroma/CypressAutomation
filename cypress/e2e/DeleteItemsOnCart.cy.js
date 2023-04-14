/// <reference types="Cypress"/>

import { Login1,AddToCartItems } from './functions.cy.js'


describe('Delete Items ', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

      
  })

  it('Add Items on cart', () => {

    Login1('testuser2@yopmail.com','Testing123')

    //Add items on cart

    AddToCartItems()

    cy.get(':nth-child(4) > .btn').click()
      .url()
      .should('include','/dashboard/cart')

    //delete items on cart

    cy.get('.cart').find('.cartWrap').should('have.length',3)
    cy.get(':nth-child(1) > .items > .infoWrap > .removeWrap').find('.btn-danger').click()
    


  })
})
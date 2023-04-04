/// <reference types="Cypress"/>

import { Login } from './Login.cy.js'

describe('Delete Items ', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

      
  })

  it('Add Items on cart', () => {

    Login('testuser2@yopmail.com','Testing123')

    //Add items on cart

    cy.get('.container').find('.card-body').should('have.length',3)
      .eq(0).contains(' Add To Cart').click()
    cy.wait(500)
    cy.get('.container').find('.card-body').should('have.length',3)
      .eq(1).contains(' Add To Cart').click()
    cy.wait(500)
    cy.get('.container').find('.card-body').should('have.length',3)
      .eq(2).contains(' Add To Cart').click()

    //delete items on cart

    cy.get('.cart').find('.cartWrap').should('have.length',3)
    cy.get('.btn-danger').contains('zara coat 3').click()


  })
})
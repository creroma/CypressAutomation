/// <reference types="Cypress"/>

import { Login } from './Login.cy.js'

describe('Addtocart', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

      
  })

  it('Viewing items before adding to cart', () => {

    Login('testuser2@yopmail.com','Testing123')
    cy.get('#products').find('.row').should('have.length',2)
    //viewing zara coat
      .eq(0)
      .should('contain','zara coat 3')
      cy.get(':nth-child(1) > .card > .card-body > .w-40').click()
        .url()
        .should('include','/product-details')  
          //adding to cart
          cy.get('.product-buttons > .btn').click()
          cy.get('.toast-message').should('contain','Product Added To Cart')
          //continue shopping
          cy.get('.continue').click()
            .url()
            .should('include','/dashboard')
    //Viewing addidas original
    cy.get('#products').find('.row').should('have.length',2)
    .eq(1)
    //.should('contain','adidas original')

    cy.get(':nth-child(2) > .card > .card-body > .w-40').click()
      .url()
      .should('include','/product-details')
        //adding to cart
        cy.get('.product-buttons > .btn').click()
        cy.get('.overlay-container').should('contain','Product Added To Cart')
        //continue shopping
        cy.get('.continue').click()
        .url()
        .should('include','/dashboard')

    //Viewing iphone 13 pro
    cy.get('.container').find('.card')
      .should('contain','iphone 13 pro')

    cy.get(':nth-child(3) > .card > .card-body > .w-40').click()
      .url()
      .should('include','/product-details')
      //adding to cart
      cy.get('.product-buttons > .btn').click()
      cy.get('.overlay-container').should('contain','Product Added To Cart')

       //continue shopping
       cy.get('.continue').click()
       .url()
       .should('include','/dashboard')
  })


})
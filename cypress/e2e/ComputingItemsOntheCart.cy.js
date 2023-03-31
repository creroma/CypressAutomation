/// <reference types="Cypress"/>

import { Login } from './Login.cy.js'

describe('ComputeItems', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')
      
  })


  it.only('Compute items from the cart', () => {

    Login('testuser2@yopmail.com','Testing123')

        //adding items on cart
        cy.get('.row').find('.card-body').should('have.length',3)
          .eq(0)
        cy.contains('Add To Cart').click()

        cy.get('.row').find('.card-body').should('have.length',3)
          .eq(1)
        cy.get(':nth-child(2) > .card > .card-body > .w-10').click()

        //Go to cart panel
        cy.get(':nth-child(4) > .btn').should('contain','Cart').click()
          .url()
          .should('include','/dashboard/cart')

        //Computing the selected ites
        var sum=0
        cy.get('.prodTotal').each(($el, index, $list) => {

          const amount =$el.text()
          var result = amount.split(" ")
          result = result[1].trim()
          sum= Number(sum)+Number(result)
        }).then(function()
        {
          cy.log(sum)
          cy.get(':nth-child(1) > .value').should('contain',sum)
          cy.get(':nth-child(2) > .value').should('contain',sum)

        })

        cy.get('.subtotal > ul > :nth-child(3) > .btn').click()
          .url()
          .should('include','/order')

          cy.get('.form-group > .input').type('p')
          cy.get('.ta-results > :nth-child(27)').click()
          cy.get('.btnn').click()
          cy.get('h1.hero-primary').should('contain',' Thankyou for the order. ')
            .url()
            .should('include','/dashboard/thanks')
          
          //Clicking the download CSV

          cy.get('button').contains('Click To Download Order Details in CSV').should('be.visible').click()
          cy.wait(10000)

          cy.readFile('cypress/downloads/order-invoice_testuser2.csv').should('exist')

        
      })


  })
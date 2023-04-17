/// <reference types="Cypress"/>

describe('For Merging test conflicts', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

  })

  function ForgotPass(email, password,confPassFP)
    {

        cy.get('input[placeholder="Enter your email address"]').type(email);
        cy.get('#userPassword').type(password);
        cy.get('#confirmPassword').type(confPassFP)
        cy.get('button[type="submit"]').click();

    }

    it('Validations on forgot password', () => {
      
      cy.get('.forgot-password-link').click()  
      ForgotPass('qatesting1','Testing1','Testing')
      cy.get('.invalid-feedback')
        .should('contain','Password and Confirm Password must match with each other.')
      cy.get('.invalid-feedback')
        .should('contain','*Enter Valid Email')
    });

    it('Clicking save without data, new changes and testing', () => {

      cy.get('.forgot-password-link').click()

      cy.get('.btn-custom').click()

      cy.get('.invalid-feedback').should('have.length',3)
      
    })
    it('newchanges', () => {
    
      cy.get('.forgot-password-link').click()
    })
  })
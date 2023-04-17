/// <reference types="Cypress"/>

describe('Forgot Password', () => {

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

    it('Input valid data', () => {
      
      cy.get('.forgot-password-link').click()  
      ForgotPass('testuser1@yopmail.com','Testing12','Testing12')
      cy.get('.toast-container')
      .should('be.visible').and('contain','Password Changed ')
      
    });
})
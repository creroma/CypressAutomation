/// <reference types="Cypress"/>

describe('CypressRegistration', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

  })

  function Register(firstname, lastname, email, Pnumber, occupation, gender, password, confirmpass)
    {
        cy.get('#firstName').type(firstname);
        cy.get('#lastName').type(lastname);
        cy.get('#userEmail').type(email);
        cy.get('#userMobile').type(Pnumber);
        cy.get('.custom-select').select(occupation);
        cy.get('input[type="radio"]').check(gender);
        cy.get('#userPassword').type(password);
        cy.get('#confirmPassword').type(confirmpass);
        cy.get('input[type="checkbox"]').check();

    
    }

    it.only('Registration validations', () => {
  
      cy.get('.text-reset').click()
      Register('qa','tester','testuser1','1234567','Student','Male','Testing123','Testing')
      cy.get('.login-btn').click()
      cy.get('.invalid-feedback')
        .should('contain','*First Name must be 3 or more character long')
      cy.get('.invalid-feedback')
        .should('contain','*Enter Valid Email')
      cy.get('.invalid-feedback')
        .should('contain','*Phone Number must be 10 digit')
      cy.get('.invalid-feedback')
        .should('contain','Password and Confirm Password must match with each other.')
      
    });

    it('Input Valid data upon registration', () => {

      cy.get('.text-reset').click()

      Register('qaatest','ttester','testuser3@yopmail.com','1234567890','Doctor','Male','Testing123','Testing123')

      cy.get('.login-btn').click()
      cy.get('h1.headcolor')
      .should('contain','Account Created Successfully')
      cy.get('.btn-primary').click()
      .url()
      .should('include','/auth')
      
    });

  })
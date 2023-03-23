/// <reference types="Cypress"/>

describe('CypressLogin', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/client')
      .url()
      .should('include','/login')

  })

  function Login(username, password)
    {
        cy.get('#userEmail').type(username);
        cy.get('#userPassword').type(password);
        cy.get('#login').click();

        
    }

  it('Displays and error when login is invalid', () => {
  
    Login('invalid@gmail.com','invalidpassword')
    cy.get('.toast-container')
      .should('be.visible').and('contain','Incorrect email or password. ')
    
  });

  it.only('Displays and error when login is invalid', () => {
  
    Login('testuser1@yopmail.com','Testing123')
    cy.get('.left').should('contain','Automation')
      .url()
      .should('include','/dashboard')
    
    
  });
})
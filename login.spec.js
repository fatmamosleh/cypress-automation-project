
  /// <reference types="Cypress" />

describe('SauceDemo Login Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/'); 
    });

    it('Should show an error if both username and password are empty', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Epic sadface: Username is required');
    });

    it('Should show an error if only the username is provided', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Epic sadface: Password is required');
    });

    it('Should show an error if only the password is provided', () => {
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Epic sadface: Username is required');
    });

    it('Should show an error if incorrect credentials are used', () => {
        cy.get('[data-test="username"]').type('fatma');
        cy.get('[data-test="password"]').type('12345');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Should successfully log in with valid credentials', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html'); 
    });

    // Bug 1
    it('Should successfully log in with locked out user', () => {
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html'); 
    });


      //  regration Bug 1
      it('Should show a lockout message if a locked-out user attempts login', () => {
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('Should successfully log in with "problem_user"', () => {
        cy.get('[data-test="username"]').type('problem_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html'); 
    });

    it('Should successfully log in with "performance_glitch_user"', () => {
        cy.get('[data-test="username"]').type('performance_glitch_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html');  
    });

    it('Should successfully log in with "error_user"', () => {
        cy.get('[data-test="username"]').type('error_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html'); 
    });
    
});

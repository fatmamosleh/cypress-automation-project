/// <reference types="Cypress" />

describe('SauceDemo Checkout Page - Field Validation', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.url().should('include', '/checkout-step-one.html');
    });

    it('Should display an error if first name is missing', () => {
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Error: First Name is required');
    });

    it('Should display an error if last name is missing', () => {
        cy.get('[data-test="firstName"]').type('fatma');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Error: Last Name is required');
    });

    it('Should display an error if postal code is missing', () => {
        cy.get('[data-test="firstName"]').type('fatma');
        cy.get('[data-test="lastName"]').type('mosleh');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Error: Postal Code is required');
    });

    it('Should display an error if first name contains numbers', () => {
        cy.get('[data-test="firstName"]').type('fatma0123');
        cy.get('[data-test="lastName"]').type('mosleh');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible')
  .and('contain', 'First Name cannot contain numbers');

    });

    it('Should display an error if last name contains special characters', () => {
        cy.get('[data-test="firstName"]').type('fatma');
        cy.get('[data-test="lastName"]').type('@#$%');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible')
  .and('contain', 'First Name cannot contain numbers');

    });

    it('Should allow valid inputs and proceed to checkout step two', () => {
        cy.get('[data-test="firstName"]').type('fatma');
        cy.get('[data-test="lastName"]').type('mosleh');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();

        cy.url().should('include', '/checkout-step-two.html');
    });
});

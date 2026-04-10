/// <reference types="Cypress" />

describe('SauceDemo End-to-End Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should log in, add a product, and log out ', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('contain', '1'); 

        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');
        cy.get('.cart_item').should('have.length', 1); 
        cy.get('[data-test="checkout"]').click();
        cy.url().should('include', '/checkout-step-one.html');

        cy.get('[data-test="firstName"]').type('fatms');
        cy.get('[data-test="lastName"]').type('mosleh');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
        cy.url().should('include', '/checkout-step-two.html');
        cy.get('.summary_info').should('be.visible');


        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
        cy.get('[data-test="back-to-products"]').click();


        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();

        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});

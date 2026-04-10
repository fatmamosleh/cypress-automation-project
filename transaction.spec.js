/// <reference types="Cypress" />

describe('SauceDemo  Transactions Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    it('Should sort products, add to cart, continue shopping, and manage transactions', () => {
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.wait(1000); 

       

        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        
        cy.get('.shopping_cart_badge').should('contain', '2');

        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');

        cy.get('.cart_item').should('have.length', 2);
        cy.contains('.inventory_item_name', 'Sauce Labs Onesie').should('be.visible');
        cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').should('be.visible');

        cy.get('[data-test="continue-shopping"]').click();
        cy.url().should('include', '/inventory.html');

        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

        cy.get('.shopping_cart_badge').should('contain', '4');

        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');

        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();

        cy.get('.shopping_cart_badge').should('contain', '2');
        cy.get('.cart_item').should('have.length', 2);

        cy.contains('.inventory_item_name', 'Sauce Labs Onesie').should('be.visible');
        cy.contains('.inventory_item_name', 'Sauce Labs Bolt T-Shirt').should('be.visible');

        cy.get('[data-test="continue-shopping"]').click();
        cy.url().should('include', '/inventory.html');
        cy.get('[data-test="continue-shopping"]').should('not.exist'); 
    });
});

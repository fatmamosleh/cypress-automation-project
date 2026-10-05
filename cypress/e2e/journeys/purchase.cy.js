describe('Complete purchase journey', () => {
  it('logs in, purchases a product, and logs out', () => {
    cy.login();
    cy.location('pathname').should('eq', '/inventory.html');

    cy.addProductToCart('sauce-labs-backpack');
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');

    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Fatma');
    cy.get('[data-test="lastName"]').type('Mosleh');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="total-label"]').should('contain.text', 'Total:');
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');

    cy.get('[data-test="back-to-products"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.location('pathname').should('eq', '/');
    cy.get('[data-test="login-button"]').should('be.visible');
  });
});


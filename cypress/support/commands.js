Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password, { log: false });
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('addProductToCart', (productSlug) => {
  cy.get(`[data-test="add-to-cart-${productSlug}"]`).click();
});


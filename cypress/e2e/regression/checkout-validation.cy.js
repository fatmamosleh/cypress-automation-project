describe('Checkout information validation', () => {
  beforeEach(() => {
    cy.login();
    cy.addProductToCart('sauce-labs-backpack');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.location('pathname').should('eq', '/checkout-step-one.html');
  });

  it('requires a first name', () => {
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'First Name is required');
  });

  it('requires a last name', () => {
    cy.get('[data-test="firstName"]').type('Fatma');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Last Name is required');
  });

  it('requires a postal code', () => {
    cy.get('[data-test="firstName"]').type('Fatma');
    cy.get('[data-test="lastName"]').type('Mosleh');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Postal Code is required');
  });

  it('continues when all required fields are valid', () => {
    cy.get('[data-test="firstName"]').type('Fatma');
    cy.get('[data-test="lastName"]').type('Mosleh');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.location('pathname').should('eq', '/checkout-step-two.html');
  });
});


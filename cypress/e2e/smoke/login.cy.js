describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('rejects empty credentials', () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username is required');
  });

  it('rejects a missing password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Password is required');
  });

  it('rejects invalid credentials', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('invalid_password', { log: false });
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match');
  });

  it('shows the correct message for a locked-out user', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce', { log: false });
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out');
  });

  it('logs in with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce', { log: false });
    cy.get('[data-test="login-button"]').click();
    cy.location('pathname').should('eq', '/inventory.html');
    cy.get('[data-test="title"]').should('have.text', 'Products');
  });
});


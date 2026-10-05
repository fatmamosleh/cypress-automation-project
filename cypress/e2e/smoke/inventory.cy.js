describe('Inventory and cart', () => {
  beforeEach(() => {
    cy.login();
    cy.location('pathname').should('eq', '/inventory.html');
  });

  it('sorts products by price from low to high', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');
    cy.get('[data-test="inventory-item-price"]').then(($prices) => {
      const actual = [...$prices].map((item) => Number(item.innerText.replace('$', '')));
      const expected = [...actual].sort((a, b) => a - b);
      expect(actual).to.deep.equal(expected);
    });
  });

  it('adds and removes a product from the cart', () => {
    cy.addProductToCart('sauce-labs-backpack');
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
    cy.get('[data-test="inventory-item"]').should('not.exist');
  });
});


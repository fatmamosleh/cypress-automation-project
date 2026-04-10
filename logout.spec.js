describe('SauceDemo Logout Automation', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/'); 

        // Perform login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');

        cy.get('.title').should('contain', 'Products');

        cy.get('#react-burger-menu-btn').should('exist').should('be.visible');
    });

    it('Should successfully log out and redirect to the login page', () => {
        cy.get('#react-burger-menu-btn').click();

        cy.get('[data-test="logout-sidebar-link"]').should('be.visible').click();

        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});

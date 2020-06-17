describe("home test", () => {
    it("should visit home page", () => {
        cy.visit("/");
        cy.get('#username').should('contain', Cypress.config('username'));

    });
});

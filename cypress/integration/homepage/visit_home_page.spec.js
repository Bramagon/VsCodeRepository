describe("home test", () => {
    it("should visit home page", () => {
        cy.visit("/");
        cy.get('#title').should('contain', 'Welcome to AngularGame');
    });
});

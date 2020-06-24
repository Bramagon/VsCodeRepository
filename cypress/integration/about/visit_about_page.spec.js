describe("about test", () => {
    it("should visit about page", () => {
        cy.visit("/");
        cy.get('[routerlink="/about"]').click();
        cy.get('.title').should('contain', 'about');
        cy.get('.paragraph').should('contain', 'Welcome to my website!');
    });
});

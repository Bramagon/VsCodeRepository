describe("about test", () => {
    it("should visit about page", () => {
        cy.visit("/");
        cy.get('[routerlink="/about"]').click();

    });
});

describe("about test", () => {
    it("should visit about page", () => {
        cy.visit("https://i346784.hera.fhict.nl/");
        cy.get('[routerlink="/about"]').click();

    });
});

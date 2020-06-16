describe("tetris test", () => {
    it("should visit tetris page", () => {
        cy.visit("https://i346784.hera.fhict.nl/");
        cy.get('[routerlink="/Tetris"]').click();
        

    });
});

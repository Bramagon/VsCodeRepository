describe("tetris test", () => {
    it("should visit tetris page", () => {
        cy.visit("/");
        cy.get('[routerlink="/Tetris"]').click();
        cy.visit("/Tetris");
        

    });
});

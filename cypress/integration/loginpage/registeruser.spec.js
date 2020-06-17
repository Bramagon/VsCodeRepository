describe("login test", () => {
    it("should visit login and create new account", () => {
      cy.visit("");
      cy.get('[routerlink="/login"]').click();
      cy.get('#nameregister').type(Cypress.config('username'));
      cy.get('#passregister').type(Cypress.config('password'));
      cy.get('#showbtn2').click();
      cy.get('#submitbtn2').click();
      cy.url().should('include', '/login');

      
      cy.get('.ng-star-inserted > div').should('contain', Cypress.config('username'));
    });
  });





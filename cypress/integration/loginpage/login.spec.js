describe("login test", () => {
    it("should visit login and create new account", () => {
      cy.visit("https://i346784.hera.fhict.nl/");
      cy.get('[routerlink="/login"]').click();
      cy.get('#nameregister').type(Cypress.config('username'));
      cy.get('#passregister').type(Cypress.config('password'));
      cy.get('app-add-user > .form > [value="?"]').click();
      cy.get('app-add-user > .form > [value="Submit"]').click();
      cy.url().should('include', '/login');

      
      cy.get('.ng-star-inserted > div').should('contain', Cypress.config('username'));
    });
  });





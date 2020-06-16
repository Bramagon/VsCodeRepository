describe("Login", () => {
    beforeEach(() => {
      cy.fixture('users').then((users) => {
        localStorage.setItem('users', JSON.stringify(users));
      });
    });
  
    it("should login user", () => {
      cy.visit("/login");
      cy.get('#namelogin').type(Cypress.config('username'));
      cy.get('#passlogin').type(Cypress.config('password'));
      cy.get('app-login > .form > [type="submit"]').click();
      cy.url().should('include', '/login');
      cy.get('.ng-star-inserted > div').should('contain', Cypress.config('username'));
    });
  });
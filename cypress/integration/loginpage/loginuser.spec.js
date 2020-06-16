describe("Login", () => {
    beforeEach(() => {
      cy.fixture('users').then((users) => {
        localStorage.setItem('users', JSON.stringify(users));
      });
    });
  
    it("should login user", () => {
      cy.visit("https://i346784.hera.fhict.nl/");
      cy.get('[routerlink="/login"]').click();
      cy.get('#namelogin').type(Cypress.config('username'));
      cy.get('#passlogin').type(Cypress.config('password'));
      cy.get('#showbtn1').click();
      cy.get('#submitbtn1').click();
      cy.url().should('include', '/login');
      cy.get('.ng-star-inserted > div').should('contain', Cypress.config('username'));
    });
  });
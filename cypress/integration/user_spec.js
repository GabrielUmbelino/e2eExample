import * as json from '../../src/assets/users.json';
describe('User', () => {

  context('List Users', () => {
    beforeEach(() => {
      cy.visit("http://localhost:8080/");
    });
    it("Verifica Lista", () => {
      cy.get("h1").should("contain", "Usuários");
      
      for (let user of json.users) {
        cy.get(`table tr.id-${user.id} td.name`).should("contain", user.name);
      }
    })
    it("Add User", () => {
      cy.get('input#name').type('User Test');

      cy.get('input#age').type('21');

      cy.get('a').click()

      cy.get(`table tr:last-child td.name`).should("contain", "User Test");
      
    })    
  });
});

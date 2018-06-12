import * as json from '../../src/assets/users.json';
// test
describe('Teste Listagem de Usuários', () => {

    beforeEach(() => {
      cy.visit("http://localhost:8080/");
    });
    // Cenário
    it("Verifica Lista", () => {
      cy.get("h1").should("contain", "Usuários");
      for (let user of json.users) {
        cy.get(`table tr.id-${user.id} td.name`).should("contain", user.name);
        cy.get(`table tr.id-${user.id} td.age`).should("contain", user.age);
      }
    })
    // Cenário
    it("Add User", () => {

      cy.get('input#name').type('User Test');

      cy.get('input#age').type('21');

      cy.get('a').click()

      cy.get(`table tr:last-child td.name`).should("contain", "User Test");

      cy.get(`table tr:last-child td.age`).should("contain", "21");

    })

    // Cenário
    it("Add User Error", () => {

      cy.get('input#name').type('User Test');

      cy.get('a').click()

      cy.get(`p.error`).should("contain", "Erro no preenchimento!");

    })
    
});

// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    // Código a ser executado antes de cada teste
    cy.visit("http://127.0.0.1:5500/src/index.html"); // Exemplo: visitar um site antes de cada teste
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  //utilizar o only para executar apenas o teste que está sendo escrito

  it.only("Envio do formulário", function () {
    cy.get('input[id="firstName"]')
      .should("be.visible")
      .type("Elza")
      .should("have.value", "Elza");

    cy.get('input[id="lastName"]')
      .should("be.visible")
      .type("Bisneta")
      .should("have.value", "Bisneta");

    cy.get('input[id="email"]')
      .should("be.visible")
      .type("elzaesimoes@gmail.com")
      .should("have.value", "elzaesimoes@gmail.com");

    cy.get('textarea[id="open-text-area"]')
      .should("be.visible")
      .type("Reembolso")
      .should("have.value", "Reembolso");

    cy.get('button[type="submit"').should("be.visible").click();

    cy.get('span[class="success"').should("be.visible");
  });
});

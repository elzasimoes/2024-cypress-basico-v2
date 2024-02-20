// <reference types="Cypress" />

const meuTexto =
  "Não salvamos dados submetidos no formulário da aplicação CAC TAT. Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real. No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino. Talking About Testing";

describe("Página de política de privacidade", Cypress._.times(5, function () {
  beforeEach(() => {
    // Código a ser executado antes de cada teste
    cy.visit("/src/privacy.html"); // Exemplo: visitar um site antes de cada teste
  });

  it("01 - verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT - Política de privacidade");
  }); 

  it("02 - verifica o título dentro da aplicação", function () {
    cy.contains('#title', 'CAC TAT - Política de privacidade').should('be.visible')
  }); 

  it("03 - verifica o texto dentro da aplicação", function () {
    cy.contains('#white-background', meuTexto).should('be.visible')
  }); 
  
}));

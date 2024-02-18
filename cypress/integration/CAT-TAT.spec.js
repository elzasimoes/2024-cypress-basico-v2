// <reference types="Cypress" />

const meuTexto = 'O Cypress é uma ferramenta versátil e eficaz para automação de testes front-end. Sua abordagem centrada no desenvolvedor, juntamente com características poderosas, contribui para a criação de testes confiáveis e de alta qualidade. Ao adotar o Cypress, as equipes de desenvolvimento podem melhorar significativamente a eficiência dos testes e garantir a entrega de software robusto e confiável.'

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    // Código a ser executado antes de cada teste
    cy.visit("http://127.0.0.1:5500/src/index.html"); // Exemplo: visitar um site antes de cada teste
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  //utilizar o only para executar apenas o teste que está sendo escrito

  it("Envio do formulário", function () {
    cy.get('#firstName')
      .should("be.visible")
      .type("Elza", { delay: 0})
      .should("have.value", "Elza");

    cy.get('#lastName')
      .should("be.visible")
      .type("Bisneta", { delay: 0})
      .should("have.value", "Bisneta");

    cy.get('#email')
      .should("be.visible")
      .type("elzaesimoes@gmail.com", { delay: 0})
      .should("have.value", "elzaesimoes@gmail.com");

    cy.get('#open-text-area')
      .type(meuTexto,  { delay: 0})
      .should("have.value", meuTexto);

    cy.get('button[type="submit"').should("be.visible").click();

    cy.get('span[class="success"').should("be.visible");
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('#firstName')
    .should("be.visible")
    .type("Elza", { delay: 0})
    .should("have.value", "Elza");

  cy.get('#lastName')
    .should("be.visible")
    .type("Bisneta", { delay: 0})
    .should("have.value", "Bisneta");

  cy.get('#email')
    .should("be.visible")
    .type("elzaesimoes", { delay: 0})
    .should("have.value", "elzaesimoes");

  cy.get('#open-text-area')
    .type(meuTexto,  { delay: 0})
    .should("have.value", meuTexto);

  cy.get('button[type="submit"').should("be.visible").click();

  cy.get('span[class="error"').should("be.visible");
  })

  it('Visto que o campo de telefone só aceita números, crie um teste para validar que, se um valor não-numérico for digitado, seu valor continuará vazio.', function() {
    cy.wait(5000)
    cy.get('#phone')
        .type('abcdeysysa')
        .should('have.value', '')
})

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName')
        .should("be.visible")
        .type("Elza", { delay: 0})
        .should("have.value", "Elza");
  
      cy.get('#lastName')
        .should("be.visible")
        .type("Bisneta", { delay: 0})
        .should("have.value", "Bisneta");
  
      cy.get('#email')
        .should("be.visible")
        .type("elzaesimoes@gmail.com", { delay: 0})
        .should("have.value", "elzaesimoes@gmail.com");
  
      cy.get('#open-text-area')
        .type(meuTexto,  { delay: 0})
        .should("have.value", meuTexto);
  
      cy.get('button[type="submit"').should("be.visible").click();
  
      cy.get('span[class="error"').should("be.visible");
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
        .should("be.visible")
        .type("Elza", { delay: 0})
        .clear()
        .should("have.value", "Elza");
  
      cy.get('#lastName')
        .should("be.visible")
        .type("Bisneta", { delay: 0})
        .clear()
        .should("have.value", "Bisneta");
  
      cy.get('#email')
        .should("be.visible")
        .type("elzaesimoes@gmail.com", { delay: 0})
        .clear()
        .should("have.value", "elzaesimoes@gmail.com");
  
      cy.get('#open-text-area')
        .type(meuTexto,  { delay: 0})
        .clear()
        .should("have.value", meuTexto);
  
      cy.get('button[type="submit"').should("be.visible").click();
  
      cy.get('span[class="error"').should("be.visible");
    })

    it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"').should("be.visible").click();
        cy.get('span[class="error"').should("be.visible");
    })

});


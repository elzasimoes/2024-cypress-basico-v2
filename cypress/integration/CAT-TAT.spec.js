// <reference types="Cypress" />

const meuTexto =
  "O Cypress é uma ferramenta versátil e eficaz para automação de testes front-end. Sua abordagem centrada no desenvolvedor, juntamente com características poderosas, contribui para a criação de testes confiáveis e de alta qualidade. Ao adotar o Cypress, as equipes de desenvolvimento podem melhorar significativamente a eficiência dos testes e garantir a entrega de software robusto e confiável.";

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    // Código a ser executado antes de cada teste
    cy.visit("src/index.html"); // Exemplo: visitar um site antes de cada teste
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  //utilizar o only para executar apenas o teste que está sendo escrito

  it("01 - Envio do formulário", function () {
    cy.get("#firstName")
      .should("be.visible")
      .type("Elza", { delay: 0 })
      .should("have.value", "Elza");

    cy.get("#lastName")
      .should("be.visible")
      .type("Bisneta", { delay: 0 })
      .should("have.value", "Bisneta");

    cy.get("#email")
      .should("be.visible")
      .type("elzaesimoes@gmail.com", { delay: 0 })
      .should("have.value", "elzaesimoes@gmail.com");

    cy.get("#open-text-area")
      .type(meuTexto, { delay: 0 })
      .should("have.value", meuTexto);

    cy.contains("button", "Enviar").should("be.visible").click();

    cy.get('span[class="success"').should("be.visible");
  });

  it("02 - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("#firstName")
      .should("be.visible")
      .type("Elza", { delay: 0 })
      .should("have.value", "Elza");

    cy.get("#lastName")
      .should("be.visible")
      .type("Bisneta", { delay: 0 })
      .should("have.value", "Bisneta");

    cy.get("#email")
      .should("be.visible")
      .type("elzaesimoes", { delay: 0 })
      .should("have.value", "elzaesimoes");

    cy.get("#open-text-area")
      .type(meuTexto, { delay: 0 })
      .should("have.value", meuTexto);

    cy.contains("button", "Enviar").should("be.visible").click();

    cy.get('span[class="error"').should("be.visible");
  });

  it("03 - Visto que o campo de telefone só aceita números, crie um teste para validar que, se um valor não-numérico for digitado, seu valor continuará vazio.", function () {
    cy.wait(5000);
    cy.get("#phone").type("abcdeysysa").should("have.value", "");
  });

  it("04 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("#firstName")
      .should("be.visible")
      .type("Elza", { delay: 0 })
      .should("have.value", "Elza");

    cy.get("#lastName")
      .should("be.visible")
      .type("Bisneta", { delay: 0 })
      .should("have.value", "Bisneta");

    cy.get("#email")
      .should("be.visible")
      .type("elzaesimoes@gmail.com", { delay: 0 })
      .should("have.value", "elzaesimoes@gmail.com");

    cy.get("#phone-checkbox").check();

    cy.get("#open-text-area")
      .type(meuTexto, { delay: 0 })
      .should("have.value", meuTexto);

    cy.contains("button", "Enviar").should("be.visible").click();

    cy.get('span[class="error"').should("be.visible");
  });

  it("05 - preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("#firstName")
      .should("be.visible")
      .type("Elza", { delay: 0 })
      .should("have.value", "Elza")
      .clear()
      .should("have.value", "");

    cy.get("#lastName")
      .should("be.visible")
      .type("Bisneta", { delay: 0 })
      .should("have.value", "Bisneta")
      .clear()
      .should("have.value", "");

    cy.get("#email")
      .should("be.visible")
      .type("elzaesimoes@gmail.com", { delay: 0 })
      .should("have.value", "elzaesimoes@gmail.com")
      .clear()
      .should("have.value", "");

    cy.get("#open-text-area")
      .type(meuTexto, { delay: 0 })
      .should("have.value", meuTexto)
      .clear()
      .should("have.value", "");

    cy.contains("button", "Enviar").should("be.visible").click();

    cy.get('span[class="error"').should("be.visible");
  });

  it("06 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.contains("button", "Enviar").should("be.visible").click();
    cy.get('span[class="error"').should("be.visible");
  });

  it("07 - envio o formulário com sucesso usando um comando customizado", function () {
    
    cy.clock()

    cy.fillMandatoryFieldsAndSubmit();

    cy.get('span[class="success"').should("be.visible");

    cy.tick(3000)

    cy.get('span[class="success"').should("not.be.visible");
  });

  it("08 - contains", function () {
    cy.contains("button", "Enviar").click();
  });

  it("09 - selecione um produto (Youtube) por seu texto", function () {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });

  it("10 - seleciona um produto (Mentoria) por seu valor (value)", function () {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });

  it("11 - seleciona um produto (Blog) por seu valor (value)", function () {
    cy.get("#product").select(1).should("have.value", "blog");
  });

  it("12 - selecione uma opção aleatoria de um select dropdown", function () {
    cy.get("#product")
      .find("option")
      .then((options) => {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOptionText = options[randomIndex].text;

        if (randomOptionText !== "Selecione") {
          cy.get("select").select(randomOptionText);
          cy.log(`Opção aleatória selecionada: ${randomOptionText}`);
        } else {
          cy.log(`Opção não pode ser clicada: ${randomOptionText}`);
        }
      });
  });

  it("13 -  marca o tipo de atendimento 'Feedback'", function () {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  });

  it("14 - Marca cada tipo de atendimento", function () {
    cy.get('input[type="radio"]')
      .should("have.length", 3)
      .each(function ($radio) {
        cy.wrap($radio).check();
        cy.wrap($radio).should("be.checked");
      });
  });

  it("15 - Marca cada checkbox e desmarca do meio de contato preferencial", function () {
    cy.get('input[type="checkbox"]')
      .should("have.length", 2)
      .each(function ($checkbox) {
        cy.wrap($checkbox).check();
        cy.wrap($checkbox).should("be.checked");
        cy.wrap($checkbox).uncheck();
        cy.wrap($checkbox).should("not.be.checked");
      });
  });

  it("16 - Marca ambos checkbox e desmarca o ultimo", function () {
    cy.get('input[type="checkbox"]')
      .check()
      .should("be.checked")
      .last()
      .uncheck()
      .should("not.be.checked");
  });

  it("17- selecione um arquivo da pasta fixtures", function () {
    const filePath = "cypress/fixtures/example.json";
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile(filePath, { action: "drag-drop" })
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("18- seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", function () {
    cy.fixture("example.json").as("sampleFile");
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("@sampleFile", { action: "drag-drop" })
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("19 - verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", function () {
    cy.get("#privacy a").should("have.attr", "target", "_blank");
  });

  it("20 - acessa a página da política de privacidade removendo o target e então clicando no link", function () {
    cy.get("#privacy a").invoke("removeAttr", "target").click();

    cy.contains('#title', 'CAC TAT - Política de privacidade').should('be.visible')
  });

  it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('faz uma requisição http', function() {
    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    .should(function(response) {
      const { status, statusText, body } = response
      expect(status).to.equal(200)
      expect(statusText).to.equal('OK')
      expect(body).to.include('CAC TAT')
    })
  })

});

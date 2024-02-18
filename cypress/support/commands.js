Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
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
    .type('Teste', { delay: 0 })
    .should("have.value", "Teste");

  cy.contains('button', 'Enviar').click()
});

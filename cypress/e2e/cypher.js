
describe('Caesar Cypher', () => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });

  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  describe('on encrypt', () => {
    beforeEach(() => {
      cy.get('.cypher-input').type('bar');
      cy.get('.cypher-encrypt').click();
    });

    it('displays the encrypted string', () => {
      cy.get('.cypher-output').should('have.text', 'one');
    });
  });

  describe('on decrupt', () => {
    beforeEach(() => {
      cy.get('.cypher-input').type('one');
      cy.get('.cypher-decrypt').click();
    });

    it('displays the decrypted string', () => {
      cy.get('.cypher-output').should('have.text', 'bar');
    });
  });
});

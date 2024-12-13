describe('App', () => {
  it('should load the title and table', () => {
    cy.visit('/');
    cy.contains('Choose your Tickets');
    cy.get('[data-testid=main-table-content-root]').should('exist');
  });

  describe("when the user clicks on a row", () => {
    it("should open a dialog", () => {
      cy.visit('/');
      cy.get('[data-testid=main-table-content-row-cell]').first().click();
      cy.get('[data-testid=ticket-dialog-root]').should('exist');
    });
  })
});
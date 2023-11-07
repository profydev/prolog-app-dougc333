//there are 2 places with loading icons
describe("Loading animation", () => {
  context("desktop mode", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("project list", () => {
      cy.visit("http://localhost:3000/dashboard");
      cy.get('[data-cy="footerId"]').should("exist");
    });
    it("issues list", () => {
      cy.visit("http://localhost:3000/dashboard/issues");
      cy.get('[data-cy="issueId"]').should("exist");
    });
  });

  context("modile mode", () => {
    beforeEach("mobile mode", () => {
      cy.viewport("iphone-8");
    });

    it("project list", () => {
      cy.visit("http://localhost:3000/dashboard");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("issues list", () => {
      cy.visit("http://localhost:3000/dashboard/issues");
      cy.get('[data-cy="issueId"]').should("exist");
    });
  });
});

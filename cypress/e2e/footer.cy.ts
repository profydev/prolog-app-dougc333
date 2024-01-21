describe("tests for footer", () => {
  context("desktop mode", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("test dashboards page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("test issues page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/issues");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("test alerts page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/alerts");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("test users page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/users");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("test settings page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/settings");
      cy.get('[data-cy="footerId"]').should("exist");
    });
  });

  context("mobile mode", () => {
    beforeEach("mobile mode", () => {
      cy.viewport("iphone-8");
    });
    it("test dashboards page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("test issues page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/issues");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("test alerts page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/alerts");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("test users page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/users");
      cy.get('[data-cy="footerId"]').should("exist");
    });

    it("test settings page for footer", () => {
      cy.visit("http://localhost:3000/dashboard/settings");
      cy.get('[data-cy="footerId"]').should("exist");
    });
  });
});

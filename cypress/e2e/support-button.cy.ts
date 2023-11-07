describe("support alert", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get('[src="/icons/menu.svg"]').click();
  });

  context("desktop mode", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("get support layout", () => {
      cy.on("window:alert", (str) => {
        expect(str).to.equal(`Support`);
      });

      cy.get('[src="/icons/support.svg"]').click({ force: true });
    });
  });
  //does this work in mobile mode?
  context("mobile mode", () => {
    beforeEach("mobile mode", () => {
      cy.viewport("iphone-8");
      //cy.get('[src="/icons/menu.svg"]').click();
    });
    it("get support layout", () => {
      cy.on("window:alert", (str) => {
        expect(str).to.equal(`Support`);
      });

      cy.get('[src="/icons/support.svg"]').click({ force: true });
    });
  });
});

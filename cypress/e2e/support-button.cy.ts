describe("support alert", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get('[src="/icons/menu.svg"]').click();
  });

  it("get support layout", () => {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Support`);
    });

    cy.get('[src="/icons/support.svg"]').click({ force: true });
  });
});

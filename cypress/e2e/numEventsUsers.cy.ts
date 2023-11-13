import mockIssues1 from "../fixtures/issues-page-1.json";
import mockIssues2 from "../fixtures/issues-page-2.json";
import mockIssues3 from "../fixtures/issues-page-3.json";

describe("numEvents and numUsers testing", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=1", {
      fixture: "issues-page-1.json",
    }).as("getIssues1");

    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=2", {
      fixture: "issues-page-2.json",
    }).as("getIssues2");

    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=3", {
      fixture: "issues-page-3.json",
    }).as("getIssues3");

    cy.visit("http://localhost:3000/dashboard/issues?page=1");
    cy.visit("http://localhost:3000/dashboard/issues?page=2");
    cy.visit("http://localhost:3000/dashboard/issues?page=3");

    cy.wait("@getIssues1");
    cy.wait("@getIssues2");
    cy.wait("@getIssues3");
  });

  context("desktop mode", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("test numUsers numEvents page1", () => {
      cy.visit("http://localhost:3000/dashboard/issues?page=1");
      cy.get("table tbody tr").each(($el, index) => {
        cy.wrap($el).within(() => {
          cy.get("td")
            .eq(3)
            .should("contain.text", mockIssues1["items"][index].numUsers);
          cy.get("td")
            .eq(2)
            .should("contain.text", mockIssues1["items"][index].numEvents);
        });
      });
    });

    it("test numUsers numEvents page2", () => {
      cy.visit("http://localhost:3000/dashboard/issues?page=2");
      cy.get("table tbody tr").each(($el, index) => {
        //console.log("index:",index)
        //cy.log("index:",index)
        cy.wrap($el).within(() => {
          //cy.log("mockIssues1:",mockIssues1["items"][0].numUsers)
          cy.get("td")
            .eq(3)
            .should("contain.text", mockIssues2["items"][index].numUsers);
          cy.get("td")
            .eq(2)
            .should("contain.text", mockIssues2["items"][index].numEvents);
        });
      });
    });

    it("test numUsers numEvents page3", () => {
      cy.visit("http://localhost:3000/dashboard/issues?page=3");
      cy.get("table tbody tr").each(($el, index) => {
        //console.log("index:",index)
        //cy.log("index:",index)
        cy.wrap($el).within(() => {
          //cy.log("mockIssues1:",mockIssues1["items"][0].numUsers)
          cy.get("td")
            .eq(3)
            .should("contain.text", mockIssues3["items"][index].numUsers);
          cy.get("td")
            .eq(2)
            .should("contain.text", mockIssues3["items"][index].numEvents);
        });
      });
    });
  });
});

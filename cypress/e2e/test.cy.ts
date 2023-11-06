import mockProjects from "../fixtures/projects.json";

describe("test.cy.ts", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });
    it("print list", () => {
      cy.get("main")
        .get("#projul")
        .children("li")
        .each(($el, index) => {
          // check that project data is rendered.there are 3 cards. Where is the 3? This is different

          cy.wrap($el).contains(mockProjects[index].name);
          // cy.wrap($el).contains(languageNames[index]);
          // cy.wrap($el).contains(mockProjects[index].numIssues);
          // cy.wrap($el).contains(mockProjects[index].numEvents24h);
          //  cy.wrap($el).contains(capitalize(mockProjects[index].status));
          //  cy.wrap($el)
          //    .find("a")
          //    .should("have.attr", "href", "/dashboard/issues");
        });

      cy.get("main").get("#projul").children("li").should("have.length", 3);
      // cy.get("#projlist").get("li").=
      //   // cy.log("x:",cy.wrap(x),index)
      // console.log("x:",cy.wrap(x),index)
      // })
    });
  });
});

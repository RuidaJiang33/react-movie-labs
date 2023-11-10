let people;
let personId;


describe("Base tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        people = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/people/page/1");
  });

  describe("From the people page to a person's details", () => {
    it("navigates to the people details page and change browser URL", () => {
      cy.get('.MuiPaper-root.MuiCard-root').eq(0).find('img.MuiCardMedia-img').should('be.visible').click();
      cy.url().should("include", `/people/${people[0].id}`);
    });
  });
});
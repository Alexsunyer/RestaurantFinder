describe("Restaurant Finder testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test error input without content", () => {
    cy.get("form button[type=submit]").click();
    cy.wait(500);
    cy.get("form .error-alert").should("exist");
  });

  it("Test filter by name", () => {
    cy.get("form div:nth-child(1) input").type("tasty").click(0, 0);
    cy.wait(500);
    cy.get("form button[type=submit]").click();
    cy.wait(500);
    cy.get("ul#restaurant-list div:nth-child(1)").contains("Tasty");
  });

  it("Test filter by city", () => {
    cy.get("div#city").click();
    cy.wait(500);
    cy.get("li").contains("Cityville").click();
    cy.wait(500);
    cy.get("form button[type=submit]").click();
    cy.wait(1000);
    cy.get("ul#restaurant-list div#restaurant:nth-child(1)").contains(
      "Cityville"
    );
  });

  it("Test filter by meal", () => {
    cy.get("form div#meal-buttons button:nth-child(1)").click();
    cy.wait(500);
    cy.get("form button[type=submit]").click();
    cy.wait(500);
    cy.get("ul#restaurant-list").should("have.length.greaterThan", 0);
  });

  it("Test filter by all filters", () => {
    cy.get("form div:nth-child(1) input").type("tasty").click(0, 0);
    cy.wait(500);
    cy.get("div#city").click();
    cy.wait(500);
    cy.get("li").contains("Cityville").click();
    cy.wait(500);
    cy.get("form div#meal-buttons button:nth-child(1)").click();
    cy.wait(500);
    cy.get("form button[type=submit]").click();
    cy.wait(500);
    cy.get("ul#restaurant-list").should("have.length.greaterThan", 0);
  });

  it("Test empty filter's content action", () => {
    cy.get("form div:nth-child(1) input").type("tasty").click(0, 0);
    cy.wait(500);
    cy.get("div#city").click();
    cy.wait(500);
    cy.get("li").contains("Cityville").click();
    cy.wait(500);
    cy.get("form div#meal-buttons button:nth-child(1)").click();
    cy.wait(500);
    cy.get("form div.input-form:nth-child(3) button.empty-input").click();
    cy.wait(500);
    cy.get("form div.input-form:nth-child(2) button.empty-input").click();
    cy.wait(500);
    cy.get("form div.input-form:nth-child(1) button.empty-input").click();
    cy.wait(500);
    cy.get("form button[type=submit]").click();
    cy.wait(500);
    cy.get("form .error-alert").should("exist");
  });
});

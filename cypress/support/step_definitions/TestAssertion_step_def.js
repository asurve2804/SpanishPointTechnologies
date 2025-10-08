import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestAssertion from "../../e2e/PageObjects/TestAssertion";

let userdata;

beforeEach(() => {
  cy.fixture("TestAssertion").then(function (testData) {
    userdata = testData;
  });
});
const testAssert = new TestAssertion();

// Scenario: Assert the list of supported products under the heading There are several types of Product Supported

Given("User visits website", () => {
  cy.visit(Cypress.env("url"));
});
When("User hovers on Modules in the header section", () => {
  testAssert.getBurgerMenu().click();
  testAssert.getModulesHeader().should("be.visible").click();
  testAssert.getCloseButton().click();
});
When("User clicks on Repertoire Management Module from the menu", () => {
  testAssert.getRepertoireManagementModule().should("be.visible").click();
  testAssert.getLearnMore().click();
});
When(
  "Clicks on Products Supported tab under Additional Features section",
  () => {
    testAssert.getProductsSupported().should("exist").click();
  }
);
Then("List of supported products are displayed under the heading", () => {
  testAssert.getProductsSupportedHeading().then((heading) => {
    const text = heading.text();
    expect(text).to.equal(userdata.supportedProductsHeader);
  });

  testAssert
    .getListOfSupportedProducts()
    .parent()
    .find("ul li")
    .should("have.length", userdata.supportedProducts.length)
    .each(($e1) => {
      const products = $e1
        .text()
        .replace(/\u00A0/g, " ")
        .replace(/\u200B/g, "")
        .trim();
      expect(userdata.supportedProducts).to.include(products);
    });
});

class TestAssertion {
  getBurgerMenu() {
    return cy.get("#burger");
  }
  getCloseButton() {
    return cy.get("#burger");
  }
  getModulesHeader() {
    return cy.contains("Modules");
  }
  getLearnMore() {
    return cy.get("a[title='Repertoire Management Module']");
  }
  getRepertoireManagementModule() {
    return cy.get('.vc_tta-tab a[href="#repertoire-management"]');
  }
  getProductsSupported() {
    return cy
      .get(".vc_tta-tabs-list .vc_tta-title-text")
      .contains("Products Supported");
  }
  getProductsSupportedHeading() {
    return cy.get(
      "#\\31 661350017393-4859bb9f-5341c79e-be34 > .vc_tta-panel-body > .vc_row > :nth-child(2) > .vc_column-inner > :nth-child(1) > .vc_custom_heading"
    );
  }
  getListOfSupportedProducts() {
    return cy.contains("There are several types of Product Supported:");
  }
}
export default TestAssertion;

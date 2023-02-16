const expandComputeNav = () => {
  cy.get("[data-quickstart-id=qs-nav-compute]", { timeout: 120000 }).click();
};

const gotoNodeHealthChecks = () => {
  expandComputeNav();
  cy.contains("NodeHealthChecks", { timeout: 120000 }).click();
};

const gotoNodeHealthCheckDetails = (name: string) => {
  expandComputeNav();
  cy.contains("NodeHealthChecks", { timeout: 120000 }).click();
  cy.contains(name, { timeout: 12000 }).click();
};

export { gotoNodeHealthChecks, gotoNodeHealthCheckDetails };

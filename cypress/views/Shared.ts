const selectFromDropdown = (
  dropdownToggleSelector: string,
  itemLabel: string
) => {
  cy.get(dropdownToggleSelector).click();
  cy.get("[role=menuitem]").contains(itemLabel).click();
};

const closePopover = () => {
  cy.get("[aria-label=Close]").click();
};

export function login() {
  cy.visit("/");
  cy.contains("admin").click();
  cy.get("#inputUsername").type("kubeadmin");
  cy.get("#inputPassword").type("Gddox-8Dfn5-CZnBv-vPKXW{enter}");
}

export { selectFromDropdown, closePopover };

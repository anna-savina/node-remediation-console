import * as ConsoleNav from "../views/ConsoleNav";
import * as DetailsView from "../views/DetailsView";

// import {
//   addUnhealthyCondition,
//   defaultConditions,
//   setUnhealthyCondition,
// } from "../views/FormView/UnhealthyConditionsView";
import {
  clicableDefaultNHCFields,
  defaultNHCData,
  notClickableDefaultNHCFields,
} from "../support/constants";

import { login } from "../views/Shared";

// import * as EditorView from "../views/EditorView";
// import * as ListView from "../views/NHCTableView";


describe("Check default NHC", () => {
  before(() => {
    login();
    ConsoleNav.gotoNodeHealthCheckDetails(defaultNHCData.name);
  });

  it("OCP-53864 - [UI] Check nhc-worker-default Details page", function () {
    DetailsView.validateName(defaultNHCData.name);
    DetailsView.validateRemediator(defaultNHCData.remediator);
    DetailsView.validateNodeSelector(defaultNHCData.nodeSelector);

    cy.wrap(clicableDefaultNHCFields).each((value) => {
      cy.get('[data-test="' + value + '"]')
        .get('[type="button"]')
        .should("exist")
        .and("contain", value);
    });

    cy.wrap(notClickableDefaultNHCFields).each((value) => {
      cy.get('[data-test-selector="details-item-label__' + value + '"]').should(
        "contain",
        value
      );
    });
  });
});

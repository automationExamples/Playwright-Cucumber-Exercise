import { Given } from "@cucumber/cucumber";
import { When } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { clickOnButtonByRole,fillField } from "../uiHelpers";

Given('I open the {string} page', async (url) => {
  await getPage().goto(url);
});

When('I click on {string} button', async (buttonName) => {
  const page = getPage();
  await clickOnButtonByRole(page, buttonName);
});

When('I fill in {string}: {string}', async (fieldName, value) => {
  const page = getPage();
  await fillField(page, fieldName, value);
});
import { Given, Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Common } from "../pages/common.page";

Given("I open the {string} page", async (url) => {
  await getPage().goto(url);
});

Then("I should see the title {string}", async (expectedTitle) => {
  await new Common(getPage()).validateTitle(expectedTitle);
});

Then("Select the mini cart in header", async () => {
  await new Common(getPage()).clickOnMiniCart();
});

Then("Select {string} btn", async (text: string) => {
  await new Common(getPage()).btnClick(text);
});

Then("Validate url {string}", async (url: string) => {
  await new Common(getPage()).validateUrl(url);
});

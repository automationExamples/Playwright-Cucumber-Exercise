import { When, Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Purchase } from "../pages/purchase.page";

Then("I add the backpack to the cart", async () => {
  await new Purchase(getPage()).addBackpackToCart();
});

When("I check out with the information:", async (dataTable) => {
  const data = dataTable.rowsHash();
  await new Purchase(getPage()).checkoutWithInfo(data.firstname, data.lastname, data.zipcode);
});

When("I select Finish", async () => {
  await new Purchase(getPage()).selectFinish();
});

Then('I should recieve the text {string}', async (expectedText) => {
  await new Purchase(getPage()).validateConfirmationText(expectedText);
});

Then("I should receive the error message {string}", async (expectedError) => {
  await new Purchase(getPage()).validateErrorMessage(expectedError);
});
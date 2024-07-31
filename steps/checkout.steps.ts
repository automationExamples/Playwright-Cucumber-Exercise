import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Checkout } from "../pages/checkout.page";

Then("Fill in the checkout fields", async (dataTable) => {
  const data = dataTable.rowsHash();
  await new Checkout(getPage()).enterCheckoutInfo(
    data.firstName,
    data.lastName,
    data.zip
  );
});

Then("Validate the text {string}", async (text: string) => {
  await new Checkout(getPage()).validateCheckoutComplete(text);
});

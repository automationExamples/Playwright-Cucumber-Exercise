import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Checkout } from "../pages/checkout.page";

Then(
  "Fill in the First Name {string}, Last Name {string}, and Zip or Postal Code {string}",
  async (first, last, zip) => {
    await new Checkout(getPage()).enterCheckoutInfo(first, last, zip);
  }
);

Then("Validate the text {string}", async (text: string) => {
  await new Checkout(getPage()).validateCheckoutComplete(text);
});

Then(
  "Select {string} and validate url {string}",
  async (text: string, url: string) => {
    await new Checkout(getPage()).btnClick(text, url);
  }
);

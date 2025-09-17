import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Purchase } from "../pages/purchase.page";

Then("I will click checkout", async () => {
  await new Purchase(getPage()).clickCheckout();
});

Then(
  "I will fill in the checkout information with {string}, {string}, and {string}",
  async (firstName: string, lastName: string, postalCode: string) => {
    await new Purchase(getPage()).fillCheckoutInfo(
      firstName,
      lastName,
      postalCode
    );
  }
);

Then("I will click continue", async () => {
  await new Purchase(getPage()).clickContinue();
});

Then("I will click finish", async () => {
  await new Purchase(getPage()).clickFinish();
});

Then(
  "I should see the confirmation message {string}",
  async (expectedMessage: string) => {
    await new Purchase(getPage()).validateConfirmationMessage(expectedMessage);
  }
);

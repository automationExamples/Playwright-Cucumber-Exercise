import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Purchase } from "../pages/purchase.page";

// Then("I will add the backpack to the cart", async () => {
//   const purchase = new Purchase(getPage());
//   await purchase.addBackpackToCart();
// });

Then("I will select the cart", async () => {
  const purchase = new Purchase(getPage());
  await purchase.selectCart();
});

Then("I will select Checkout", async () => {
  const purchase = new Purchase(getPage());
  await purchase.selectCheckout();
});

Then(
  "I will fill in the First Name as {string}, Last Name as {string}, and Zip Code as {string}",
  async (firstName: string, lastName: string, zip: string) => {
    const purchase = new Purchase(getPage());
    await purchase.fillCheckoutDetails(firstName, lastName, zip);
  }
);

Then("I will select Continue", async () => {
  const purchase = new Purchase(getPage());
  await purchase.selectContinue();
});

Then("I will select Finish", async () => {
  const purchase = new Purchase(getPage());
  await purchase.selectFinish();
});

Then("I should see the text {string}", async (expectedText: string) => {
  const purchase = new Purchase(getPage());
  const actualText = await purchase.getConfirmationText();
  if (actualText !== expectedText) {
    throw new Error(
      `Expected text to be "${expectedText}" but found "${actualText}"`
    );
  }
});

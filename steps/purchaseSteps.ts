import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getPage } from '../playwrightUtilities';
import { PurchasePage } from "../pages/purchase.page";



Then('I will select the cart', async () => {
  await  new PurchasePage(getPage()).openCart();
});

Then('I will proceed to checkout', async () => {
  await  new PurchasePage(getPage()).clickCheckout();
});

Then(
  'I will fill in the checkout information with first name {string}, last name {string}, and zip code {string}',
  async (firstName: string, lastName: string, zip: string) => {
    await  new PurchasePage(getPage()).fillCheckoutInfo(firstName, lastName, zip);
  }
);

Then('I will continue to the next step', async () => {
  await  new PurchasePage(getPage()).clickContinue();
});

Then('I will finish the purchase', async () => {
  await  new PurchasePage(getPage()).clickFinish();
});

Then('I should see the confirmation message {string}', async (expectedText: string) => {
  const confirmation = await  new PurchasePage(getPage()).getConfirmationText();
  expect(confirmation).toContain(expectedText);
});

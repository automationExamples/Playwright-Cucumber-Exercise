const { Then } = require('@cucumber/cucumber');
const { getPage } = require('../playwrightUtilities');
const { Purchase } = require('../pages/purchase.page');
const { expect } = require('@playwright/test');

Then('I select the cart', async () => {
  await new Purchase(getPage()).goToCart();
});

Then('I select Checkout', async () => {
  await new Purchase(getPage()).clickCheckout();
});

Then(/^I fill in the First Name "([^"]*)", Last Name "([^"]*)", and Zip\/Postal Code "([^"]*)"$/, async function(first: string, last: string, zip: string) {
  await new Purchase(getPage()).fillCheckoutInfo(first, last, zip);
});

Then('I select Continue', async () => {
  await new Purchase(getPage()).clickContinue();
});

Then('I select Finish', async () => {
  await new Purchase(getPage()).clickFinish();
});

Then("I validate the text 'Thank you for your order!'", async () => {
  expect(await new Purchase(getPage()).isThankYouVisible()).toBeTruthy();
});

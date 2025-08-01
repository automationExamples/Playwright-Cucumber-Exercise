import { When, Then, After, Status } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';
import { Product } from '../pages/product.page';
import { expect } from '@playwright/test';

And('Select the cart displayed at the top right', async () => {
  await new Purchase(getPage()).selectShoppingCart();
});

When('I click the Checkout button', async () => {
  await new Purchase(getPage()).clickCheckoutButton();
});

And('I fill in the {string} {string} and {string}', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).fillCheckoutYourInfoForm(firstName, lastName, postalCode);
});

And('Click on Continue button', async () => {
  await new Purchase(getPage()).selectContinueButtion();
});

And('I click the Finish button', async () => {
  await new Purchase(getPage()).clickFinishButton();
});

Then('I should see the Checkout Complete page with the text {string}', async (expectedMessage) => {
  const messageLocator = await new Purchase(getPage()).validateOrderMessage();
    // Wait until visible
  await messageLocator.waitFor({ state: 'visible', timeout: 5000 });
  const actualMessage = await messageLocator.textContent();
  expect(actualMessage?.trim()).toBe(expectedMessage);
});
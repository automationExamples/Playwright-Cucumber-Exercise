import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { expect, Page } from '@playwright/test';
import { Purchase } from '../pages/purchase.page';

Then('Select the cart on top right corner', async () => {
  await new Purchase(getPage()).selectShoppingCart();
});

Then('Check out the cart items', async () => {
  await new Purchase(getPage()).checkoutCartItems();
});

Then('Enter your {string} {string} and {string}', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).enterCheckoutInformation(firstName, lastName, postalCode);
});

Then('Click on Continue button', async () => {
  await new Purchase(getPage()).selectContinueButtion();
});

Then('Select Finish button', async () => {
  await new Purchase(getPage()).selectFinishButtion();
});

Then('Validate the text {string}', async (expectedMessage) => {
  const messageLocator = await new Purchase(getPage()).validateOrderMessage();
    // Wait until visible
  await messageLocator.waitFor({ state: 'visible', timeout: 5000 });
  const actualMessage = await messageLocator.textContent();
  expect(actualMessage?.trim()).toBe(expectedMessage);
});

 


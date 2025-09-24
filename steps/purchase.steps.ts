import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage } from '../playwrightUtilities';
import { PurchasePage } from '../pages/purchase.page';

When('I add the product {string} to the cart', async function (productName: string) {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.addProduct(productName);
});

When('I go to the cart page', async function () {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.openCart();
});

When('I proceed to checkout', async function () {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.checkout();
});

When('I provide checkout information {string} {string} {string}', async function (firstName: string, lastName: string, zip: string) {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.fillCheckoutInfo(firstName, lastName, zip);
});

When('I finish the purchase', async function () {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.finish();
});

Then('I should see the confirmation message {string}', async function (expectedMessage: string) {
  const purchasePage = new PurchasePage(getPage());
  const actualMessage = await purchasePage.getConfirmationText();
  expect(actualMessage).toContain(expectedMessage);
});

import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { PurchasePage } from '../pages/purchase.page';

When('I select the cart displayed at the top right', async () => {
  const page = getPage();
  const purchasePage = new PurchasePage(page);
  await purchasePage.clickShoppingCart();
});

When('I select the checkout button', async () => {
  const page = getPage();
  const purchasePage = new PurchasePage(page);
  await purchasePage.clickCheckoutButton();
});

When('I fill in the form with {string} {string} {string}', async (firstName, lastName, postalCode) => {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.fillCheckoutYourInfoForm(firstName, lastName, postalCode);
});

When('I select the continue button', async () => {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.selectContinueButton();
});

When('I select the finish button', async () => {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.clickFinishButton();
});

Then('I should see the order confirmation message {string}', async (expectedMessage) => {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.validateOrderMessage(expectedMessage);
});
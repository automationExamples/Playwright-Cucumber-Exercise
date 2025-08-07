import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

When('I select the cart displayed at the top right', async () => {
  const page = getPage();
  const purchase = new Purchase(page);
  await purchase.clickShoppingCart();
});

When('I select the checkout button', async () => {
  const page = getPage();
  const purchase = new Purchase(page);
  await purchase.clickCheckoutButton();
});

When('I fill in the form with {string} {string} {string}', async (firstName, lastName, postalCode) => {
  const purchase = new Purchase(getPage());
  await purchase.fillCheckoutYourInfoForm(firstName, lastName, postalCode);
});

When('I select the continue button', async () => {
  const purchase = new Purchase(getPage());
  await purchase.selectContinueButton();
});

When('I select the finish button', async () => {
  const purchase = new Purchase(getPage());
  await purchase.clickFinishButton();
});

Then('I should see the order confirmation message {string}', async (expectedMessage) => {
  const purchase = new Purchase(getPage());
  await purchase.validateOrderMessage(expectedMessage);
});

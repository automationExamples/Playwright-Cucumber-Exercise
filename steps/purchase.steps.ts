import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I select the cart', async () => {
  await new Purchase(getPage()).openCart();
});

Then('I select Checkout', async () => {
  await new Purchase(getPage()).startCheckout();
});

Then('I fill checkout info with {string} {string} {string}', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).fillCheckoutInfo(firstName, lastName, postalCode);
});

Then('I select Continue', async () => {
  await new Purchase(getPage()).continue();
});

Then('I select Finish', async () => {
  await new Purchase(getPage()).finish();
});

Then('I should see the purchase confirmation {string}', async (expectedText) => {
  await new Purchase(getPage()).validateOrderSuccess(expectedText);
});
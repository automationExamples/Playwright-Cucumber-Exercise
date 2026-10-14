import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I open the cart', async () => {
  await new Purchase(getPage()).openCart();
});

Then('I proceed to checkout', async () => {
  await new Purchase(getPage()).checkout();
});

Then('I enter checkout info {string} {string} {string}', async (first, last, zip) => {
  await new Purchase(getPage()).fillCheckoutInfo(first, last, zip);
});

Then('I continue checkout', async () => {
  await new Purchase(getPage()).continue();
});

Then('I finish the order', async () => {
  await new Purchase(getPage()).finish();
});

Then('I should see the purchase thank you message', async () => {
  await new Purchase(getPage()).expectThankYou();
});

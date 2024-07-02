import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will add the backpack to the cart', async () => {
  await new Purchase(getPage()).addBackPackToCart();
});

Then('I will click on the cart icon', async () => {
  await new Purchase(getPage()).selectCartIcon();
});

Then('I will click on the checkout button', async () => {
  await new Purchase(getPage()).selectCheckout();
});

Then('I will fill in my shipping information', async () => {
  await new Purchase(getPage()).fillInShipping();
});

Then('I will confirm my purchase', async () => {
  await new Purchase(getPage()).confirmPurchase();
});

Then('I should see the message {string}', async (expectedMessage) => {
  await new Purchase(getPage()).validatePurchaseMessage(expectedMessage);
});
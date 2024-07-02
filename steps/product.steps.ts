import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will click on the cart icon', async () => {
  await new Product(getPage()).selectCartIcon();
});

Then('I will click on the checkout button', async () => {
  await new Product(getPage()).selectCheckout();
});

Then('I will fill in my shipping information', async () => {
  await new Product(getPage()).fillInShipping();
});

Then('I will confirm my purchase', async () => {
  await new Product(getPage()).confirmPurchase();
});

Then('I should see the message {string}', async (expectedMessage) => {
  await new Product(getPage()).validatePurchaseMessage(expectedMessage);
});
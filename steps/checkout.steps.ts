import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Checkout } from '../pages/checkout.page';

Then('I can checkout', async () => {
  await new Product(getPage()).checkout();
  await new Checkout(getPage()).checkout()
});
Then('I should see {string}', async (expected) => {
  await new Checkout(getPage()).validateConfirmation(expected));
});
import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I sort products by {string}', async (label) => {
  await new Product(getPage()).sortBy(label);
});

Then('I should see products sorted by price {string}', async (order) => {
  await new Product(getPage()).expectSortedByPrice(order as any);
});

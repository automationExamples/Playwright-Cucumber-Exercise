import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).sortItems(sortOption);
});

Then('all items are sorted by price in {string} order', async (order: string) => {
  await new Product(getPage()).validatePricesAreSorted(order as 'asc' | 'desc');
});
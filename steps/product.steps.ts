import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will sort the items by {string}', async (sortOption: string) => {
  const product = new Product(getPage());
  await product.sortItemsBy(sortOption);
});

Then(
  'I will validate all 6 items are sorted correctly by price in {string} order',
  async (sortOrder: string) => {
    const product = new Product(getPage());
    await product.validateItemsSortedByPrice(sortOrder);
  }
);
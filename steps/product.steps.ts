import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).selectSortOption(sortOption);
});

Then('items should be sorted by {string}', async (sortOption) => {
  await new Product(getPage()).validateSortedItems(sortOption);
});
import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I sort the items by {string}', async (sortOption: string) => {
  const product = new Product(getPage());
  await product.selectSortByOption(sortOption);
});

Then('I should see all products sorted by {string}', async (sortOption: string) => {
  const product = new Product(getPage());
  await product.validateProductPagePriceSort(sortOption);
});

Then('I will add the backpack to the cart', async () => {
  const product = new Product(getPage());
  await product.addBackPackToCart();
});

When('Select the cart displayed at the top right', async () => {
  const product = new Product(getPage());
  await product.clickShoppingCart();
});

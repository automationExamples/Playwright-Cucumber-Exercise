import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will sort the products by {string}', async (sortOption: string) => {
  const product = new Product(getPage());
  await product.sortProducts(sortOption);
});

Then('I will validate the prices are sorted low to high', async () => {
  const product = new Product(getPage());
  const result = await product.validateLowToHigh();
});

Then('I will validate the prices are sorted high to low', async () => {
  const product = new Product(getPage());
  const result = await product.validateHighToLow();
});
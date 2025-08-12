import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort the page by {string}', async (sortBy) => {
  await new Product(getPage()).sortProductsBy(sortBy);
});

Then('I should see the product list now sorted by: {string}', async (sortBy) => {
  await new Product(getPage()).validateSort(sortBy);
});
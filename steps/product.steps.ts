import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will sort the products by {string}', async (sortOption) => {
  await new Product(getPage()).sortProducts(sortOption);
});

Then('I should see the products sorted correctly by {string}', async (sortType) => {
  await new Product(getPage()).validateProductSorting(sortType);
});

// Specific step definitions for Scenario Outline
Then('I will sort the products by lohi', async () => {
  await new Product(getPage()).sortProducts('lohi');
});

Then('I will sort the products by hilo', async () => {
  await new Product(getPage()).sortProducts('hilo');
});

Then('I should see the products sorted correctly by lohi', async () => {
  await new Product(getPage()).validateProductSorting('lohi');
});

Then('I should see the products sorted correctly by hilo', async () => {
  await new Product(getPage()).validateProductSorting('hilo');
});
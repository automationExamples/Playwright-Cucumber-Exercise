import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will sort the products by {string}', async (sortOption) => {
  await new Product(getPage()).sortProducts(sortOption);
});

Then('I should verify all products are sorted correctly by {string}', async (sortOption) => {
  await new Product(getPage()).validateSortOrder(sortOption);
});

Then('I should see the cart is empty', async () => {
  await new Product(getPage()).validateCartIsEmpty();
});

Then('I should see the cart still contains items', async () => {
  await new Product(getPage()).validateCartHasItems();
});
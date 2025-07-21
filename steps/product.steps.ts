import { When,Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort the products by {string}', async (sort) => {
  await new Product(getPage()).sortItems(sort);
});

Then('All products should be sorted by {string}', async (sortOrder) => {
  await new Product(getPage()).verifySortedOrder(sortOrder);
});


import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will add the all items to the cart', async () => {
  await new Product(getPage()).addAllItemsToCart();
});

Then('I sort the products by {string}', async (sort) => {
  await new Product(getPage()).sortItems(sort);
});

Then('I will verify the products are sorted by {string}', async (sortOrder) => {
  await new Product(getPage()).assertSortOrder(sortOrder);
});
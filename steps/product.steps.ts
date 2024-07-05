import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will sort the items by {string}', async (sortOrder) => {
  await new Product(getPage()).sortByPrice(sortOrder);
});

Then('I should see all 6 items sorted correctly by price', async () => {
  await new Product(getPage()).validateProductsSortedByPrice('Price (low to high)');
});

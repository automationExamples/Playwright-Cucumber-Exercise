import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).sortBy(sortOption);
});

Then('I should see the items sorted by {string}', async (sortOption) => {
  await new Product(getPage()).validateSortedBy(sortOption);
});

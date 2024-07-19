import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

// Add Then clause to sort the items
Then('I will sort the items by {string}', async (methodValue) => {
  await new Product(getPage()).sortItemsBy(methodValue);
});
// Add Then clause to validate the items are sorted
Then('I will validate the items are sorted by {string}', async (sortValue) => {
  await new Product(getPage()).validateItemsSorted(sortValue);
});
import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

// Step definition: Sort the items by the given sort option
Then('I will sort the items by {string}', async (sortOption) => {
  // Create a new Product page object and call its sortBy method with the provided sort option
  await new Product(getPage()).sortBy(sortOption);
});

// Step definition: Validate that the items are sorted by the given sort option
Then('I should see the items sorted by {string}', async (sortOption) => {
  // Create a new Product page object and call its validateSortedBy method with the provided sort option
  await new Product(getPage()).validateSortedBy(sortOption);
});

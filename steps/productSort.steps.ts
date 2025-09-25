import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I sort the items by {string}', async (sortType) => {
  await new Product(getPage()).sortItemsBy(sortType);
});

Then('I should see all 6 items sorted by price {string}', async (sortType) => {
  await new Product(getPage()).validateItemsSortedByPrice(sortType);
});

import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';



Then('I sort the items by {string}', async (sortType: string) => {
  await new Product(getPage()).sortItemsBy(sortType);
});

Then('I validate all {int} items are sorted correctly by price', async (itemCount: number) => {
  const expectedOrder = itemCount > 1 ? 'high to low' : 'low to high';
  await new Product(getPage()).validateItemsSortedCorrectlyByPrice(expectedOrder);
});
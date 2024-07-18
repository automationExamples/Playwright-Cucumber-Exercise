import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will Sort the items by {string}', async (sortOption: string)=> {
  await new Product(getPage()).selectSortOption(sortOption)
});

Then('I Verify all items are sorted by {string}', async (sortedBy: string)=> {
  await new Product(getPage()).validateItemsSort(sortedBy)
});
import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});
When('I sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).sortItems(sortOption)
});
Then('I validate all 6 items are sorted correctly by price in {string} order', async (sortOrder) => {
  await new Product(getPage()).verifySortItemsByPrice(sortOrder);
});
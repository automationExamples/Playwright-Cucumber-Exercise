import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I Sort the items by {string}', async (sortOption: string) => {
  await new Product(getPage()).selectOption(sortOption);
  await new Product(getPage()).verifySortOrder(sortOption);
});
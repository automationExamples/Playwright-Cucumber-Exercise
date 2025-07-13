import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will click on the cart button', async () => {
  await new Product(getPage()).clickCartButton();
});

Then('I sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).selectSort(sortOption);
});

Then('I should see all products sorted by price in {string} order', async (sortOption: string) => {
   await new Product(getPage()).verifySort(sortOption);
});

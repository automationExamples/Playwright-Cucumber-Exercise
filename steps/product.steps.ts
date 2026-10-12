import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will select the cart', async () => {
  await new Product(getPage()).openCart();
})

Then('I will sort the items by {string}', async (sortOption: string) => {
  await new Product(getPage()).sortBy(sortOption);
});
 
Then('I should see all {int} items sorted by price {string}', async (count: number, order: string) => {
  await new Product(getPage()).validateSortedByPrice(count, order);
})
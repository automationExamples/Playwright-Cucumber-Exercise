import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});


Then('I will sort the products by {string}', async (sortOrder: string) => { 
  await new Product(getPage()).selectSort(sortOrder);
})

Then('I will validate the products are sorted by {string}', async (sortOrder: string) => { 
  await new Product(getPage()).selectSort(sortOrder);
})

Then("I will sort the products by Price (low to high)", async () => {
  await new Product(getPage()).selectSort('Prices (low to high)');
})

Then("I will sort the products by Price (high to low)", async () => {
  await new Product(getPage()).selectSort('Price (high to low)');
})

Then("I will validate the products are sorted by Prices (low to high)", async () => {
  await new Product(getPage()).validateSort('Price (low to high)');
})

Then("I will validate the products are sorted by Price (high to low)", async () => {
  await new Product(getPage()).validateSort('Price (high to low)');
})

import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { get } from 'http';


Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('Select the cart \\(top-right)', async () => {
  await new Product(getPage()).cartButton();
});


Then('Sort the items by Price \\(low to high)', async function () {
  this.sortOption = 'Price (low to high)';
  await new Product(getPage()).sortItems(this.sortOption);
});

Then('Sort the items by Price \\(high to low)', async function () {
  this.sortOption = 'Price (high to low)';
  await new Product(getPage()).sortItems(this.sortOption);
});

Then('Validate all 6 items are sorted correctly by price', async function () {
  await new Product(getPage()).validateSorting(this.sortOption);
});

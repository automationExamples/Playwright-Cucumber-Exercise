import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort products by {string}', async (sort) => {
  await new Product(getPage()).sortProduct(sort);
});

Then('all products should be sorted by price {string}', async (sortOrder) => {
  await new Product(getPage()).validateSort(sortOrder);
});

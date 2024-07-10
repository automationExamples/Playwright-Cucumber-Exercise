import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I remove the backpack from the cart', async () => {
  await new Product(getPage()).removeBackPackFromCart();
});

When('I select the cart \\(top-right)', async () => {
  await new Product(getPage()).goToCart();
});

When('I sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).sortItems(sortOption);
});

Then('I validate all items are sorted by price {string}', async (order) => {
  await new Product(getPage()).validatePricesSorted(order === 'Price (low to high)' ? 'asc' : 'desc');
});

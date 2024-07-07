import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I add the {string} to the cart', async function (productItem) {
  await new Product(getPage()).addProductToCart(productItem);
});

When('I click the cart', async () => {
  await new Product(getPage()).clickOnshoppingCart();
});

Then('I sort all the items by {string}', async (sortBy) => {
  await new Product(getPage()).applyFilter(sortBy);
});

Then('I validate all {int} items are sorted correctly by {string}', async (int, sortBy) => {
  await new Product(getPage()).verifySorting(sortBy);
});


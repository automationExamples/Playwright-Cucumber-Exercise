import { Then } from '@cucumber/cucumber';
import { When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).sortItemsBy(sortOption);
});

When('I add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I click on the cart', async () => {
  await new Product(getPage()).clickOnCart();
});

When('I add {string} items to the cart', async (number) => {
  await new Product(getPage()).addItemsToCart(number);
});

Then('I should see the items are sorted by {string}', async (sortOption) => {
  await new Product(getPage()).validateItemsSortedBy(sortOption)
});

Then('I should see the shopping cart badge shows {string} items added', async (number) => {
  await new Product(getPage()).validateCartBadge(number)
});
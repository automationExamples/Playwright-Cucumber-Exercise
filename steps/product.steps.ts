// import { Then } from '@cucumber/cucumber';
// import { getPage } from '../playwrightUtilities';
// import { Product } from '../pages/product.page';
// import { expect } from '@playwright/test';

// Then('I will add the backpack to the cart', async () => {
//   await new Product(getPage()).addBackPackToCart();
// });

// Then(/^I will Sort the items by '(.*)'$/, async (sort) => {
//   await new Product(getPage()).doSort(sort);
// });

// Then('I should see all 6 items sorted by price', async function () {
//   await new Product(getPage()).validatePriceSort();
// });
import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When(/^I will Sort the items by '(.*)'$/, async (sort) => {
  await new Product(getPage()).doSort(sort);
});

Then(/^I should see all 6 items sorted by price in "(.*)"$/, async (order) => {
  await new Product(getPage()).validatePriceSort(order);
});

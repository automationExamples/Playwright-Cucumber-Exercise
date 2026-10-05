import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I should see the page header {string}', async (expectedHeader: string) => {
  await new Product(getPage()).validatePageHeader(expectedHeader);
});

When('I sort the items by {string}', async (sortOption: string) => {
  await new Product(getPage()).sortBy(sortOption);
});

Then('I should see all {int} items sorted correctly by {string}', async (itemCount: number, sortOption: string) => {
  await new Product(getPage()).validateSortedBy(sortOption, itemCount);
});

Then('I should see {int} item(s) in the cart badge', async (itemCount: number) => {
  await new Product(getPage()).validateCartBadgeCount(itemCount);
});

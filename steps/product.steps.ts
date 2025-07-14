import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { expect } from '@playwright/test';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort the items by {string}', async function (sortOption: string) {
  await new Product(getPage()).selectSortOption(sortOption);
});

Then('I validate that all items are sorted by price {string}', async function (sortOrder) {
  const prices = await new Product(getPage()).getDisplayedPrices();
  const sorted = [...await prices].sort((a, b) => sortOrder === 'Price (low to high)' ? a - b : b - a);
  expect(prices).toEqual(sorted);
});
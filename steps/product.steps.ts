import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I sort products by {string}', async function (sortOption: string) {
  const productPage = new Product(getPage());

  // Debug log
  console.log("DEBUG: Current URL =", await getPage().url());

  await productPage.sortProducts(sortOption);
});

Then('products should be sorted in {string} order', async function (order: string) {
  const productPage = new Product(getPage());
  const result = await productPage.arePricesSorted(order);

  console.log("DEBUG: Prices sorted check =", result);

  expect(result).toBe(true);
});

import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { expect } from "@playwright/test";

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I sort the products by {string}', async (sortLabel: string) => {
  await new Product(getPage()).sortBy(sortLabel);
});

Then('I validate that 6 items are sorted in {string} price order', async (expectedOrder: string) => {
  const prices = await new Product(getPage()).getProductPrices();

  expect(prices.length).toBe(6); // Ensure 6 items are present

  const sorted = [...prices].sort((a, b) => a - b);
  const expectedSorted = expectedOrder === 'ascending' ? sorted : sorted.reverse();

  expect(prices).toEqual(expectedSorted);
});

Then('I validate all products and prices against the JSON file', async () => {
  const productPage = new Product(getPage());
  const isValid = await productPage.validateProductsAgainstJSON();
  expect(isValid).toBe(true);
});
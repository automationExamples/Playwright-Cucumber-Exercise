import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { expect } from '@playwright/test';


Then('I will add the backpack to the cart', async function () {
  const page = getPage();
  await page.waitForSelector('[data-test="add-to-cart-sauce-labs-backpack"]', { timeout: 5000 });
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
});

Then('I sort the items by {string}', async function (sortOption: string) {
  const page = getPage();
  const dropdown = page.locator('.product_sort_container');
  await dropdown.waitFor({ state: 'visible', timeout: 5000 });
  await dropdown.selectOption({ label: sortOption });
  await page.waitForTimeout(500); // allow UI to update
});

Then('I should see all 6 items sorted by {string}', async function (sortOption: string) {
  const items = await getPage().locator('.inventory_item').count();
  expect(items).toBe(6);
});

Then('the first item should be {string}', async function (expectedName: string) {
  const actualName = await getPage().locator('.inventory_item_name').first().textContent();
  expect(actualName?.trim()).toBe(expectedName);
});

Then('the last item should be {string}', async function (expectedName: string) {
  const itemNames = await getPage().locator('.inventory_item_name').allTextContents();
  const lastName = itemNames[itemNames.length - 1].trim();
  expect(lastName).toBe(expectedName);
});

Then('the prices should be in {string} order', async function (order: string) {
  const prices = await getPage().locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  const sorted = [...numericPrices].sort((a, b) => order === 'ascending' ? a - b : b - a);
  expect(numericPrices).toEqual(sorted);
});

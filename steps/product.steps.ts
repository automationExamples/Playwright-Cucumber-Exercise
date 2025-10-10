import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('I sort the products by {string}', async function (sortOption: string) {
  if (!this.page) throw new Error('Page not initialized');

  // Wait for the sort dropdown to be visible
  const sortDropdown = this.page.locator('[data-test="product_sort_container"]');
  await sortDropdown.waitFor({ state: 'visible', timeout: 10000 });

  // Map human-readable sort options to dropdown values
  const sortMap: Record<string, string> = {
    'Price (low to high)': 'lohi',
    'Price (high to low)': 'hilo',
  };

  const value = sortMap[sortOption];
  if (!value) throw new Error(`Sort option "${sortOption}" not recognized`);

  // Select the option
  await sortDropdown.selectOption({ value });

  // Wait until the first product appears after sorting
  const firstProduct = this.page.locator('.inventory_item').first();
  await firstProduct.waitFor({ state: 'visible', timeout: 5000 });
});

Then('the products should be displayed in correct order by price', async function () {
  if (!this.page) throw new Error('Page not initialized');

  const priceElements = await this.page.locator('.inventory_item_price').allTextContents();
  const numericPrices: number[] = priceElements.map((p: string) =>
    parseFloat(p.replace('$', ''))
  );

  // Check ascending and descending order
  const isAscending = numericPrices.every((v, i, a) => i === 0 || a[i - 1] <= v);
  const isDescending = numericPrices.every((v, i, a) => i === 0 || a[i - 1] >= v);

  expect(isAscending || isDescending).toBeTruthy();
  console.log('Sorted Prices:', numericPrices);
});

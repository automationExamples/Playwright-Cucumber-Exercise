import { Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';

type WorldCtx = { page: Page };

Then('I sort products by {string}', async function (this: WorldCtx, label: string) {
  await expect(this.page).toHaveURL(/inventory\.html/);
  const select = this.page.locator('[data-test="product-sort-container"]');
  await expect(select).toBeVisible();
  await select.selectOption({ label }); // select by visible text
});

Then('product prices should be ordered {string}', async function (this: WorldCtx, label: string) {
  const priceEls = this.page.locator('.inventory_item_price');
  const pricesText = await priceEls.allInnerTexts();
  const prices = pricesText.map(t => Number(t.replace('$', '').trim()));

  const asc = [...prices].sort((a, b) => a - b);
  const wantDesc = /high to low/i.test(label);
  const expected = wantDesc ? [...asc].reverse() : asc;

  expect(prices, `Actual page prices: ${prices}`).toEqual(expected);
});
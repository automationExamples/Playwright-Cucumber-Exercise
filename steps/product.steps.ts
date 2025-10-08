import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { expect } from "@playwright/test";

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort products by {string}', async (sortType: string) => {
  const page = getPage();
  const sortMap: Record<string, string> = {
    "Price (low to high)": "lohi",
    "Price (high to low)": "hilo"
  }
  const value = sortMap[sortType];
  if (!value) {
    throw new Error(`Sort type ${sortType} not mapped`);
  }
  await page.selectOption('[data-test="product-sort-container"]', value);
});

Then('I should see products sorted by {string}', async (sortType: string) => {
  const page = getPage();
  const prices = await page.$$eval('.inventory_item_price', p =>
    p.map(e => parseFloat(e.textContent!.replace('$', '')))
  );

  if (sortType.includes("low to high")) {
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  } else if (sortType.includes("high to low")) {
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
  }
  else {
    throw new Error(`Sort type ${sortType} not implemented`);
  }
});
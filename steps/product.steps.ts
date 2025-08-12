import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { expect } from '@playwright/test';

When('I add {string} to the cart', async (productName: string) => {
  await new Product(getPage()).addToCartByName(productName);
});

When('I open the cart', async () => {
  await new Product(getPage()).openCart();
});

When('I proceed to checkout', async () => {
  await new Product(getPage()).proceedToCheckout();
});

When('I provide checkout info {string} {string} {string}', async (first, last, zip) => {
  await new Product(getPage()).fillCheckoutInfo(first, last, zip);
});

When('I complete the purchase', async () => {
  await new Product(getPage()).finish();
});

Then('I should see a purchase confirmation {string}', async (msg: string) => {
  const actual = await new Product(getPage()).confirmationHeader();
  expect(actual).toBe(msg);
});

When('I sort products by {string}', async (label: string) => {
  const page = getPage();
  await page.waitForURL('**/inventory.html', { waitUntil: 'domcontentloaded' });

  const dropdown = page.locator('.product_sort_container');
  await dropdown.waitFor({ state: 'visible' });
  await dropdown.selectOption({ label }); // e.g. "Price (low to high)"
});

Then('all 6 products should be sorted correctly for {string}', async (label: string) => {
  const page = getPage();
  // ensure prices are present before reading
  const pricesLoc = page.locator('.inventory_item_price');
  await pricesLoc.first().waitFor({ state: 'visible' });

  const texts = await pricesLoc.allInnerTexts();
  const prices = texts.map(t => parseFloat(t.replace('$', '').trim()));

  expect(prices.length).toBe(6);

  const asc = [...prices].sort((a, b) => a - b);
  const expected = /high to low/i.test(label) ? asc.slice().reverse() : asc;
  expect(prices).toEqual(expected);
});
import { Given, And,Then,Page } from '@cucumber/cucumber';
import { getPage} from '../playwrightUtilities';
import { expect } from '@playwright/test';
import { Product } from '../pages/product.page';
import { Login } from '../pages/login.page';

Given('I open the {string} page', async function (url: string) {
 
  await Page.goto(url)
});
Then('I will login as {string}', async (userName: String) => {
  await new Login(getPage()).loginAsUser('standard_user');

});

 And('I sort products by {string}', async function (sort: string) {
  await Page.selectOption('.product_sort_container', { label: sort });
});

Then('I should see all items sorted {string}', async function (sort: string) {
  if (sort.includes('Price')) {
    const prices = await Page.$$eval('.inventory_item_price', (els: any[]) =>
      els.map((el: { textContent: any; }) => parseFloat(el.textContent!.replace('$', '')))
    );

    const expected = [...prices].sort((a, b) =>
      sort.includes('low to high') ? a - b : b - a
    );

    expect(prices).toEqual(expected);
  } else if (sort.includes('Name')) {
    const names = await Page.$$eval('.inventory_item_name', (els: any[]) =>
      els.map((el: { textContent: any; }) => el.textContent!.trim())
    );

    const expected = [...names].sort((a, b) =>
      sort.includes('A to Z') ? a.localeCompare(b) : b.localeCompare(a)
    );

    expect(names).toEqual(expected);
  } else {
    throw new Error(`Unsupported sort option: ${sort}`);
  }
});


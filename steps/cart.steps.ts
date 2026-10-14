import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';

Then('I should see cart badge count {string}', async (count) => {
  const badge = await getPage().locator('.shopping_cart_badge').textContent();
  if ((badge ?? '').trim() !== count) {
    throw new Error(`Expected cart count ${count} but got ${badge}`);
  }
});

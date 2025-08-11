import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage } from '../playwrightUtilities';

Then('I go to the cart', async () => {
  await getPage().locator('.shopping_cart_link').click();
  await expect(getPage()).toHaveURL(/cart\.html/);
});
Then('I proceed to checkout', async () => {
  await getPage().locator('[data-test="checkout"]').click();
  await expect(getPage()).toHaveURL(/checkout-step-one\.html/);
});
Then('I fill checkout info with {string},{string},{string}', async (fn: string, ln: string, zip: string) => {
  await getPage().locator('[data-test="firstName"]').fill(fn);
  await getPage().locator('[data-test="lastName"]').fill(ln);
  await getPage().locator('[data-test="postalCode"]').fill(zip);
  await getPage().locator('[data-test="continue"]').click();
  await expect(getPage()).toHaveURL(/checkout-step-two\.html/);
});
Then('I finish checkout', async () => {
  await getPage().locator('[data-test="finish"]').click();
  await expect(getPage()).toHaveURL(/checkout-complete\.html/);
});
Then('I should see order success text {string}', async (msg: string) => {
  await expect(getPage().locator('.complete-header')).toHaveText(msg);
});

import { Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
type WorldCtx = { page: Page };

Then('I add the backpack to the cart', async function (this: WorldCtx) {
  await expect(this.page).toHaveURL(/inventory\.html/);
  await this.page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .getByRole('button', { name: 'Add to cart' })
    .click();
});

Then('I select the cart icon', async function (this: WorldCtx) {
  const cart = this.page.locator('.shopping_cart_link');
  await expect(cart).toBeVisible();
  await cart.click();
  await expect(this.page).toHaveURL(/cart\.html/);
});

Then('I select Checkout', async function (this: WorldCtx) {
  await this.page.getByRole('button', { name: 'Checkout' }).click();
  await expect(this.page).toHaveURL(/checkout-step-one\.html/);
});

Then('I fill checkout info {string} {string} {string}', async function (this: WorldCtx, first: string, last: string, zip: string) {
  await this.page.getByPlaceholder('First Name').fill(first);
  await this.page.getByPlaceholder('Last Name').fill(last);
  await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);
});

Then('I select Continue', async function (this: WorldCtx) {
  await this.page.getByRole('button', { name: 'Continue' }).click();
  await expect(this.page).toHaveURL(/checkout-step-two\.html/);
});

Then('I select Finish', async function (this: WorldCtx) {
  await this.page.getByRole('button', { name: 'Finish' }).click();
});

Then('I should see the order confirmation {string}', async function (this: WorldCtx, msg: string) {
  const pattern = new RegExp(msg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'); // case-insensitive
  await expect(this.page.getByRole('heading', { name: pattern })).toBeVisible();
});

// import { Then } from '@cucumber/cucumber';
// import { getPage } from '../playwrightUtilities';
// import { Login } from '../pages/login.page';

// Then('I should see the title {string}', async (expectedTitle) => {
//   await new Login(getPage()).validateTitle(expectedTitle);
// });

// Then('I will login as {string}', async (userName) => {
//   await new Login(getPage()).loginAsUser(userName);
// });

import { Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';

type WorldCtx = { page: Page };

Then('I should see the title {string}', async function (this: WorldCtx, expectedTitle: string) {
  await expect(this.page).toHaveTitle(expectedTitle);
});

Then('I will login as {string}', async function (this: WorldCtx, username: string) {
  await this.page.getByPlaceholder('Username').fill(username);
  await this.page.getByPlaceholder('Password').fill('secret_sauce');
  await this.page.getByRole('button', { name: 'Login' }).click();
});

Then('I should see a login error {string}', async function (this: WorldCtx, msg: string) {
  const err = this.page.locator('[data-test="error"]');
  await expect(err).toBeVisible();
  await expect(err).toHaveText(msg);
});
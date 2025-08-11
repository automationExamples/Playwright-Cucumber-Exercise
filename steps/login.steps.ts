import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

// Title check using the exact string from the feature
Then('I should see the title {string}', async (expectedTitle: string) => {
  await expect(getPage()).toHaveTitle(expectedTitle);
});

// Login with a given username (uses standard SauceDemo password inside page object)
Then('I will login as {string}', async (userName: string) => {
  await new Login(getPage()).loginAsUser(userName);
});

// Validate the error banner text for locked_out_user
Then('I should see a login error containing {string}', async (text: string) => {
  const error = getPage().locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText(text);
});

import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { expect } from '@playwright/test';


Then('I should see the title {string}', async function (expectedTitle: string) {
  const actualTitle = await getPage().title();
  expect(actualTitle).toBe(expectedTitle);
});

Then('I will login as {string}', async function (username: string) {
  const page = getPage();
  await page.fill('[data-test="username"]', username);
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  if (username === 'standard_user') {
    await page.waitForSelector('.inventory_list', { state: 'visible', timeout: 10000 });
  }
});

Then('I should see the error message {string}', async function (expectedMessage: string) {
  const errorLocator = getPage().locator('[data-test="error"]');
  const actualMessage = await errorLocator.textContent();
  expect(actualMessage?.trim()).toBe(expectedMessage);
});




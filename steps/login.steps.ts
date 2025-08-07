import { Given, When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { expect } from '@playwright/test';


Then('I should see the title {string}', async (expectedTitle: string) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});


When('I will login as {string}', async (userName: string) => {
  await new Login(getPage()).loginAsUser(userName);
});


Then('I should see error message {string}', async (expectedMessage: string) => {
  const errorElement = getPage().locator('[data-test="error"]');
  const actualMessage = await errorElement.textContent();
  expect(actualMessage?.trim()).toBe(expectedMessage);
});

import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { expect } from '@playwright/test';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});


//added by Senia

Then('I should see the login error {string}', async (expectedMessage) => {
  const errorText = (await getPage().locator('[data-test="error"]').textContent()) || '';
  
  expect(errorText.trim().toLowerCase())
    .toBe(expectedMessage.trim().toLowerCase());
});


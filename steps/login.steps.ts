import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { expect } from '@playwright/test';
import { getPage } from '../playwrightUtilities';

Then('I should see a login error containing {string}', async (text: string) => {
  const error = getPage().locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText(text);
});


Then('I should see the title {string}', async (expectedTitle: string) => {
  
  await new Login(getPage()).validateTitle(expectedTitle);

  
});

Then('I will login as {string}', async (userName: string) => {
  await new Login(getPage()).loginAsUser(userName);
});

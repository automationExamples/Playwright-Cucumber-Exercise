import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see a login error {string}', async (expectedError) => {
  const errorLocator = getPage().locator('h3[data-test="error"]');
  await errorLocator.waitFor({ state: 'visible' });
  const actualError = (await errorLocator.textContent())?.trim();
  if (actualError !== expectedError) {
    throw new Error('Expected error "${expectedError}" but found "${actualError}"');
  }
});
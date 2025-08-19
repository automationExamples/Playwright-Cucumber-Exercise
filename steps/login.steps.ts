import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

// This step is used to validate the error message displayed after a failed login attempt
// It checks if the error message matches the expected text
Then('I should see the error message {string}', async (expectedError) => {
  const page = getPage();
  const errorSelector = '[data-test="error"]';
  const errorElement = page.locator(errorSelector);
  await errorElement.waitFor({ state: 'visible' });
  const actualError = await errorElement.textContent();
  if (actualError?.trim() !== expectedError) {
    throw new Error(`Expected error message to be "${expectedError}" but found "${actualError?.trim()}"`);
  }
});
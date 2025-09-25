import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});


Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see the error message {string}', async (expectedMessage) => {
  const page = getPage();
  const errorSelector = '[data-test="error"]';
  const errorText = await page.locator(errorSelector).textContent();
  if (!errorText || !errorText.includes(expectedMessage)) {
    throw new Error(`Expected error message to include '${expectedMessage}', but got '${errorText}'`);
  }
});
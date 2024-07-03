import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see an error message containing {string}', async (errorMessage) => {
  const page = getPage();
  const errorLocator = page.locator('data-test=error'); // Adjust the selector to match the actual error message element on the page
  const errorText = await errorLocator.innerText();
  if (!errorText.includes(errorMessage)) {
    throw new Error(`Expected error message to contain "${errorMessage}" but found "${errorText}"`);
  }
  });
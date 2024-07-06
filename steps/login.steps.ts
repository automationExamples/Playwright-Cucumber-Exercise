import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});
Then('I should see an error message as {string}', async (expectedErrorMessage: string) => {
  await new Login(getPage()).getErrorLockedUser();

  // Now check the error message after it has appeared
  const actualErrorMessage = await new Login(getPage()).getErrorLockedUser();

  // Custom assertion logic
  if (actualErrorMessage !== expectedErrorMessage) {
      throw new Error(`Expected error message "${expectedErrorMessage}", but got "${actualErrorMessage}"`);
  }
});
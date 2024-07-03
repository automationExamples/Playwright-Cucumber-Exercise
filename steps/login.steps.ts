import { Then } from '@cucumber/cucumber';
import { Login } from '../pages/login.page';
import { getPage } from '../playwrightUtilities';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see the error message {string}', async (errorMessage) => {
  await new Login(getPage()).validateErrorMessage(errorMessage);
});
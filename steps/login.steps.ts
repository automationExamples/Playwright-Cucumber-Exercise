import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

When('I login with username {string} and password {string}', async (userName: string, password: string) => {
  await new Login(getPage()).loginWithCredentials(userName, password);
});

Then('I should see the error message {string}', async (expectedMessage: string) => {
  await new Login(getPage()).validateErrorMessage(expectedMessage);
});

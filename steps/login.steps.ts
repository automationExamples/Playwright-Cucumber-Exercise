import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

When('I login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('error message {string} is received', async (expectedMessage) => {
  await new Login(getPage()).validateErrorMessage(expectedMessage);
});
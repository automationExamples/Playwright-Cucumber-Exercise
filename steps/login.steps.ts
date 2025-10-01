import { Then } from '@cucumber/cucumber';
import { When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

When('I login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see an error message {string}', async (expectedMessage) => {
  await new Login(getPage()).validateErrorMessage(expectedMessage);
});
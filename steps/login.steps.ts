import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

// NK: Updated step definition to use 'When' for user action
When('I login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see the error message {string}', async (expectedErrorMessage) => {
  await new Login(getPage()).validateErrorMessage(expectedErrorMessage);
});
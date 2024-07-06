import { Then, Given } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Given('I open the {string} page', async (url) => {
  await getPage().goto(url);
});


Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});


Then('I login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see the error message {string}', async (expectedErrorMessage) => {
  await new Login(getPage()).validateErrorMessage(expectedErrorMessage);
});
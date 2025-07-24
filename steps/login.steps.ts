import { When,Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (targetTitle) => {
  await new Login(getPage()).verifyTitle(targetTitle);
});

When('I will login as {string}', async (userName) => {
  await new Login(getPage()).signInAsUser(userName);
});

Then('I should be redirected to the products page', async () => {
  await new Login(getPage()).verifyUrl();
});

Then('I should see the error msg on login page {string}', async (message) => {
  await new Login(getPage()).checkErrorMessage(message);
});

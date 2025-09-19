import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Given, When, Then } from '@cucumber/cucumber';

let loginPage: Login;


Given('I initialize the login page', async () => {
  loginPage = new Login(getPage());
});

When('I try to login as {string}', async (userName: string) => {
  await loginPage.loginAsUser(userName);
});

Then('I should see error message {string}', async (expectedErrorMsg: string) => {
  const actualErrorMsg = await loginPage.getErrorMessage();
  if (!actualErrorMsg || actualErrorMsg.trim() !== expectedErrorMsg.trim()) {
    throw new Error(`Expected error message "${expectedErrorMsg}", but got "${actualErrorMsg}"`);
  }
});

Then('I should see the title {string}', async (expectedTitle: string) => {
  const actualTitle = await loginPage.getPageTitle();
  if (actualTitle !== expectedTitle) {
    throw new Error(`Expected title "${expectedTitle}", but got "${actualTitle}"`);
  }
});

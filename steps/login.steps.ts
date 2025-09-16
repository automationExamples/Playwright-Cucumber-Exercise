import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { LoginPage } from '../pages/LoginPage.page';
import { TestContext } from '../support/TestContext';


Then('I should see the title {string}', async function(expectedTitle: string) {
  await this.context.loginPage().validateTitle(expectedTitle);
});

When('I login as {string}', async function(userName: string) {
  await this.context.loginPage().loginAsUser(userName);
});

Then('I should see the error message {string}', async function (expectedErrorText: string) {
  await this.context.loginPage().verifyError(expectedErrorText);
});
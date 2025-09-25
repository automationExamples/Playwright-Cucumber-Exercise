import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { testData } from '../data/test-data';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

When('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I will verify the error message {string}', async (errorMessage) => {
  await new Login(getPage()).verifyErrorMessage(errorMessage);
});

// Alternative steps using test data
When('I login as standard user', async () => {
  await new Login(getPage()).loginAsUser(testData.credentials.users.standard);
});

When('I login as locked user', async () => {
  await new Login(getPage()).loginAsUser(testData.credentials.users.locked);
});

Then('I should see the locked user error message', async () => {
  await new Login(getPage()).verifyErrorMessage(testData.errorMessages.lockedUser);
});
import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});
// Add When clause
When('I login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});
// Add Then error message clause
Then('I should see the error message {string}', async (expectedErrorMessage) => {
  await new Login(getPage()).validateErrorMessage(expectedErrorMessage);
})
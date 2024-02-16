import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('Should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

When('User login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('Display error message as {string}', async (loginErrorMessage) =>{
  // Validating the Error message
  await new Login(getPage()).validateLoginErrorMessage(loginErrorMessage);
});

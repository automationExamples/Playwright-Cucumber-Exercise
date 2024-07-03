import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});


//Vijay Penumatsha
When('The User able to enter Username {string}', async (userName) => {
  await new Login(getPage()).enterUsername(userName);
});

Then('The User is able to Click on Login button', => {
  await new Login(getPage()).clickOnLoginButton();
});

And('The User able to verify the Password is required Error Message {string}', async (expectederrorMessage) => {
  await new Login(getPage()).validateErrorMessage(expectederrorMessage);
});
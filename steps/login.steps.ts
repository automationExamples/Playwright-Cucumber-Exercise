import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

//added by Madhavi 
Then('verify that error_message {string} is displayed', async (errorMsg) => {
  await new Login(getPage()).verifyErrorMsgs(errorMsg)
  
});


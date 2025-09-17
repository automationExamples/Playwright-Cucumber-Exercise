import {Given, Then,Page} from '@cucumber/cucumber';
import { getPage, initializePage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';


Given('I open the {string} page', async function (url: string) {

  await Page.goto(url)
 
});

Then('I should see the title {string}', async (expectedTitle:String) => {
  await new Login(getPage()).validateTitle("Labs Swag");
});

Then('I will login as {string}', async (userName: String) => {
  await new Login(getPage()).loginAsUser("locked_out_user");
});

Then('I should see the login error message {string}', async (errMsg: String) => {
  await new Login(getPage()).loginAsUser("Sorry, this user has been locked out.");
  
});

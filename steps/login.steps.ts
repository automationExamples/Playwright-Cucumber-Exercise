import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then ('I should see the error message {string}',async (expectedMessage) =>{
   await new Login(getPage()).validateErrorMessage(expectedMessage);
});

Then('I will click on the hamburger menu', async () => {
  await new Login(getPage()).openHamburgerMenu();
});

Then('I will select logout', async () => {
  await new Login(getPage()).logout();
});

Then('I should redirected to the login page', async () => {
  await new Login(getPage()).validateLoginPageDisplayed();
});

Then('I will logout and login again as {string}', async (userName) => {
  await new Login(getPage()).openHamburgerMenu();
  await new Login(getPage()).logout();
  await new Login(getPage()).loginAsUser(userName);
});



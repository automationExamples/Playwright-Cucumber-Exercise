import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Product } from '../pages/product.page';

Then('I will login as {string}', async (userName) => {
  // Write code here that turns the phrase above into concrete actions
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});
 
Then('I receive the message {string}', async (message) => {
 const errorMessage = await new Login(getPage()).validateErrorMessage(message)
});
Then('I selected {string} and verified that I am logged out', async (menu: string) => {
  await new Product(getPage()).menuSelect(menu)
 await new Login(getPage()).validatelogOut(menu)
});
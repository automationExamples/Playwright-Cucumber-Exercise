import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { getTitle} from '../webUtils';
import { assertEquals } from '../assertions';
import { Product } from '../pages/product.page';

const password = "secret_sauce";

When('I click on the login button', async function () {
  await new Login(getPage()).clickLoginButton();
});

Then('I login as {string}', async function (username) {
  await new Login(getPage()).loginAsUser(username, password);
});

Then('I should see the title {string}', async (expectedTitle) => {
  const actualTitle = await getTitle(getPage());
  assertEquals(expectedTitle, actualTitle);
});

Then('I should see the error message {string}', async (expectedErrorMessage) => {
  const actualErrorMessage = await new Login(getPage()).getErrorMessage();
  assertEquals(expectedErrorMessage, actualErrorMessage);
});

Then('I logout', async function () {
  await new Product(getPage()).logout();
});


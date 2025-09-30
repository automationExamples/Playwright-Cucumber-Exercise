import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Products } from '../pages/products.page';


Then('I will login using valid userid {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});


When('I sort products by {string}', async function (sortOption: string) {
  await new Products(getPage()).sortItemsByAlphabet(sortOption);
});



Then('The products should be sorted alphabetically in {string} order', async function (order) {
  await new Products(getPage()).validateItemsSortedAlphabetically(order);
});

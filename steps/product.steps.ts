import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Product } from '../pages/product.page';

Then('I will login using {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

When('I sort items by price {string}', async function (sort) {
  await new Product(getPage()).sortItemsByPrice(sort);
});

Then('I should see items listed by price in {string} order', async function (order) {
  await new Product(getPage()).validateItemsSortedByPrice(order);
});
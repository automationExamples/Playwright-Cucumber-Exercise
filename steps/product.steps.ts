import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Login } from '../pages/login.page';

Then('I will login using {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

When('I sort items by price {string}', async function (sort) {
  await new Product(getPage()).sortItemsByPrice(sort);
});

Then('I should see items listed by price in {string} order', async function (order) {
  await new Product(getPage()).validateItemsSortedByPrice(order);
});

// Then('I will add the backpack to the cart', async () => {
//   await new Product(getPage()).addBackPackToCart();
// });
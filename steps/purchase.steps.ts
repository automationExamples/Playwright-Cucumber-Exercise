import { Given,When, Then, And, Page } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage} from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { purchase,check } from '../pages/purchase.page';
import { Product } from '../pages/product.page';



Given('I open the {string} page', async function (url: string) {
  await Page.goto(url);
  
});

When('I will login as {string}', async (userName: String) => {
  await new Login(getPage()).loginAsUser('standard_user');

});

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

And('I go to the cart', async function () {
  await Page.click('.shopping_cart_link');
  await expect(Page).toHaveURL(/cart.html/);
});

And(
  'I checkout with {string} {string} {string}',
  async function (firstName: string, lastName: string, zip: string) {
   
    await expect(Page).toHaveURL(/checkout-step-two.html/);
    await new purchase(check()).check('checkout')
  }
);

And('I finish the purchase', async function () {
  await Page.click('#finish');
});

Then('I should see the confirmation message {string}', async function (message: string) {
  const confirmation = await Page.textContent('.complete-header');
  expect(confirmation).toBe(message);
});

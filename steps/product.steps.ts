import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Product } from '../pages/product.page';
import { expect } from '@playwright/test';

let loginPage: Login;
let productPage: Product;

When('I login as {string}', async (userName: string) => {
  loginPage = new Login(getPage());
  await loginPage.loginAsUser(userName);
});

When('I add the backpack to the cart', async () => {
  productPage = new Product(getPage());
  await productPage.addBackpackToCart();
});

When('I go to the cart', async () => {
  await productPage.goToCart();
});

When('I proceed to checkout', async () => {
  await productPage.proceedToCheckout();
});

When('I fill in checkout information with {string} {string} {string}', async (firstName, lastName, zip) => {
  await productPage.fillCheckoutInfo(firstName, lastName, zip);
});

When('I continue checkout', async () => {
  await productPage.continueCheckout();
});

When('I finish checkout', async () => {
  await productPage.finishCheckout();
});

Then('I should see the text {string}', async (expectedText: string) => {
  await productPage.verifyOrderSuccessMessage(expectedText);
});

When('I sort products by {string}', async (sortOption: string) => {
  productPage = new Product(getPage());
  await productPage.sortByOption(sortOption);
});

Then('the products should be sorted in {string} order by price', async (order: string) => {
  const prices = await productPage.getAllProductPrices();
  const sortedPrices = [...prices].sort((a, b) => order === 'ascending' ? a - b : b - a);
  expect(prices).toEqual(sortedPrices);
});
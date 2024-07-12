import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Cart, Checkout } from '../pages/purchase.page';
import {expect} from "@playwright/test";
import {Product} from "../pages/product.page";

Then('I will add the backpack to the cart', async () => {
  const product = new Product(getPage());
  await product.addBackPackToCart();
});

Then('I select the cart', async () => {
  const cart = new Cart(getPage());
  await cart.selectCart();
});

Then('I select Checkout', async () => {
  const checkout = new Checkout(getPage());
  await checkout.selectCheckout();
});

Then('I fill in the First Name as {string}, Last Name as {string}, and Zip\\/Postal Code as {string}', async (firstName: string, lastName: string, zipCode: string) => {
  const checkout = new Checkout(getPage());
  await checkout.fillInDetails(firstName, lastName, zipCode);
});

Then('I select Continue', async () => {
  const checkout = new Checkout(getPage());
  await checkout.selectContinue();
});

Then('I select Finish', async () => {
  const checkout = new Checkout(getPage());
  await checkout.selectFinish();
});

Then('I validate the text {string}', async (expectedText) => {
  const checkout = new Checkout(getPage());
  const actualText = await checkout.getConfirmationText();
  expect(actualText).toEqual(expectedText);
});


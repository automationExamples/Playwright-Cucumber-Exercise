import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { ProductPage } from '../pages/ProductPage.page';
import { LoginPage } from '../pages/LoginPage.page';
import { TestContext } from '../support/TestContext';
import { Product } from '../components/product';

import { expect } from '@playwright/test';


When("I add the {string} to the cart", async function (title: string) {
  const product = await this.context.productPage().getProductByTitle(title);
  await product.addToCart();
});

When('I sort by {string} in {string} order', async function (sortBy: "title"|"price", order: "asc"|"desc") {
  await this.context.productPage().sortProducts(sortBy, order);
  
});

Then('I should see all items sorted by {string} in {string} order', async function (sortBy: "title"|"price", order: "asc"|"desc") {
  await this.context.productPage().verifySorted(sortBy, order);
});



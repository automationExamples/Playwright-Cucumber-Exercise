import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CheckoutPage } from "../pages/CheckoutPage";

Given(/^I login as '([^']+)'$/, async function (user: string) {
  await this.page.fill('[data-test="username"]', user);
  await this.page.fill('[data-test="password"]', "secret_sauce");
  await this.page.click('[data-test="login-button"]');
  await this.page.waitForURL("**/inventory.html");
});

When("I add {string} to the cart", async function (name: string) {
  await new CheckoutPage(this.page).addItem(name);
});

When(
  "I complete checkout with {string} {string} {string}",
  async function (first: string, last: string, zip: string) {
    const flow = new CheckoutPage(this.page);
    await flow.openCart();
    await flow.checkout();
    await flow.fillInfo(first, last, zip);
    await flow.finish();
  }
);

Then(
  "I should see purchase confirmation {string}",
  async function (txt: string) {
    const flow = new CheckoutPage(this.page);
    await expect(flow.successHeader()).toHaveText(txt);
  }
);

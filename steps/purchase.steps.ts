import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../hooks/hooks";

const URL = "https://www.saucedemo.com/";

Given("I am logged in as a standard user", async function () {
  await page.goto(URL);
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  await expect(page.locator(".title")).toHaveText("Products");
});

When("I add a product to the cart", async function () {
  await page.click(".inventory_item:first-of-type button"); // adds first item
  await page.click(".shopping_cart_link");
});

When("I proceed to checkout", async function () {
  await page.click("#checkout");
  await page.fill("#first-name", "John");
  await page.fill("#last-name", "Doe");
  await page.fill("#postal-code", "12345");
  await page.click("#continue");
  await page.click("#finish");
});

Then("I should see the successful purchase text {string}", async function (expectedText: string) {
  const confirmation = page.locator(".complete-header");
  await expect(confirmation).toHaveText(expectedText);
});

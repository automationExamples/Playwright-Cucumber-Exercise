import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../hooks/hooks";

const URL = "https://www.saucedemo.com/";

Given("I open the login page", async function () {
  await page.goto(URL);
});

Then("the page title should be {string}", async function (title: string) {
  await expect(page).toHaveTitle(title);
});

When("I login with username {string} and password {string}", async function (username: string, password: string) {
  await page.fill("#user-name", username);
  await page.fill("#password", password);
  await page.click("#login-button");
});

Then("I should see error message {string}", async function (message: string) {
  const errorMsg = page.locator("[data-test='error']");
  await expect(errorMsg).toHaveText(message);
});

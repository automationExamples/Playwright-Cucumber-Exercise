import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../world';
import { Login } from '../pages/login.page';

Given('I open the login page {string}', async function (this: CustomWorld, url: string) {
  await this.page!.goto(url);
});

Then('the page title should be {string}', async function (this: CustomWorld, expectedTitle: string) {
  const actualTitle = await this.page!.title();
  expect(actualTitle).toBe(expectedTitle);
});

// ✅ Single login step → works for Task 2, Task 3, Task 4
When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  const loginPage = new Login(this.page!);
  await loginPage.loginAsUser(username, password);
});

// Task 2 (negative login)
Then('I should remain on the login page', async function (this: CustomWorld) {
  const currentUrl = this.page!.url();
  expect(currentUrl).toContain('saucedemo.com'); // still on login page
});

Then('I should see the error message {string}', async function (this: CustomWorld, expectedMessage: string) {
  const actualMessage = await this.page!.locator('[data-test="error"]').textContent();
  expect(actualMessage).toContain(expectedMessage);
});

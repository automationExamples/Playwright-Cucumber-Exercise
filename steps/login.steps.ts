import { test, expect } from '@playwright/test';

import { When, Then } from '@cucumber/cucumber';

//
// Step: Login with any username/password
//
When(
  'I login as {string} with password {string}',
  { timeout: 15000 },
  async function (username: string, password: string) {
    if (!this.page) throw new Error('Page not initialized');
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
);

//
// Step: Login as a standard user (default password used)
//
Then(
  'I will login as {string}',
  { timeout: 15000 },
  async function (username: string) {
    if (!this.page) throw new Error('Page not initialized');
    const defaultPassword = 'secret_sauce'; // default password
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', defaultPassword);
    await this.page.click('#login-button');
  }
);

//
// Step: Validate login error message
//
Then(
  'I should see the login error message',
  { timeout: 10000 },
  async function () {
    if (!this.page) throw new Error('Page not initialized');
    const errorMessage = await this.page.textContent('[data-test="error"]');
    if (!errorMessage) {
      throw new Error('Error message not found on the page');
    }
    if (!errorMessage.toLowerCase().includes('locked out')) {
      throw new Error(`Expected locked out error message, but got: "${errorMessage}"`);
    }
  }
);

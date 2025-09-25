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
// Step: Login as a standard user (used in purchase.feature)
//
Then(
  'I will login as {string}',
  { timeout: 15000 },
  async function (username: string) {
    if (!this.page) throw new Error('Page not initialized');
    const password = 'secret_sauce'; // default password
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
);

//
// Step: Validate login error message for locked_out_user
//
Then(
  'I should see the login error message',
  { timeout: 10000 },
  async function () {
    if (!this.page) throw new Error('Page not initialized');
    const errorMessage = await this.page.textContent('[data-test="error"]');
    if (!errorMessage?.includes('locked out')) {
      throw new Error('Expected locked out error message not displayed');
    }
  }
);

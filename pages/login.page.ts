import { Page } from 'playwright';

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorMessage: string = '[data-test="error"]';

    constructor(page: Page) {
        this.page = page;
    }

  async validateTitle(expectedTitle: string) {
    const title = await this.page.title();
    if (title !== expectedTitle) {
      throw new Error(`Expected title "${expectedTitle}" but got "${title}"`);
    }
  }

  async loginAsUser(userName: string) {
    await this.page.locator(this.userNameField).fill(userName);
    await this.page.locator(this.passwordField).fill(this.password);
    await this.page.locator(this.loginButton).click();
  }

    async validateErrorMessage(expectedMsg: string) {
    const msg = await this.page.locator(this.errorMessage).textContent();
    if (!msg || !msg.includes(expectedMsg)) {
      throw new Error(`Expected error message "${expectedMsg}" but got "${msg}"`);
    }
  }

  async getPageTitle(): Promise<string> {
  return await this.page.title();
}

async getErrorMessage(): Promise<string | null> {
  return await this.page.locator(this.errorMessage).textContent();
}

}
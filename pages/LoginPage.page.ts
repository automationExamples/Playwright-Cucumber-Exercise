import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;

  private readonly userNameField: Locator;
  private readonly passwordField: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameField = page.locator('input[id="user-name"]');
    this.passwordField = page.locator('input[id="password"]');
    this.loginButton = page.locator('input[id="login-button"]');
    this.errorMessage = page.locator("div.error-message-container");
  }

  public async validateTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  public async loginAsUser(userName: string, password: string="secret_sauce") {
    await this.userNameField.fill(userName);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  public async verifyError(expectedErrorText: string) {
    await expect(this.errorMessage).toHaveText(expectedErrorText);
  }
}

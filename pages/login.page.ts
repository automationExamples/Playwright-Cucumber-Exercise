import { Page, expect } from "@playwright/test";

export class Login {
  constructor(private readonly page: Page) {}

  private readonly password: string = "secret_sauce";
  private readonly passwordField = 'input[id="password"]';
  private readonly userNameField = 'input[id="user-name"]';
  private readonly loginButton = 'input[id="login-button"]';

  // Exact check against document.title
  public async validateTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  public async loginAsUser(userName: string) {
    await this.page.locator(this.userNameField).fill(userName);
    await this.page.locator(this.passwordField).fill(this.password);
    await this.page.locator(this.loginButton).click();
  }
}

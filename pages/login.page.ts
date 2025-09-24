import { Page } from "@playwright/test";

export class Login {
  private readonly page: Page;
  private readonly userNameField: string = 'input[id="user-name"]';
  private readonly passwordField: string = 'input[id="password"]';
  private readonly loginButton: string = 'input[id="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Validate the title of the login page
   */
  public async validateTitle(expectedTitle: string) {
    const pageTitle = await this.page.title();
    if (pageTitle !== expectedTitle) {
      throw new Error(
        `Expected title to be ${expectedTitle} but found ${pageTitle}`
      );
    }
  }

  /**
   * Login as a user with given username and password.
   * Handles both success (navigates to inventory) and failure (error message visible).
   */
  public async loginAsUser(userName: string, password: string) {
    await this.page.locator(this.userNameField).fill(userName);
    await this.page.locator(this.passwordField).fill(password);
    await this.page.locator(this.loginButton).click();

    // ✅ If login succeeds → inventory page should load
    const success = await this.page
      .locator(".inventory_list")
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (success) {
      console.log("✅ Login successful, inventory page loaded.");
      return;
    }

    // ❌ If login fails → error message is shown, let step defs check it
    const errorVisible = await this.page
      .locator('[data-test="error"]')
      .isVisible()
      .catch(() => false);

    if (errorVisible) {
      console.log("⚠️ Login failed, error message will be checked in step.");
      return;
    }

    // Fallback: neither success nor error detected
    throw new Error(
      "❌ Login did not navigate to inventory or show error message."
    );
  }
}

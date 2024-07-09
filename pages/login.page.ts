import { Locator, Page, expect } from "@playwright/test";

export class Login {
  private readonly page: Page;
  private readonly password: string = "secret_sauce";
  private readonly passwordField: Locator;
  private readonly userNameField: Locator;
  private readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.passwordField = page.getByRole("textbox", { name: "password" });
    this.userNameField = page.getByRole("textbox", { name: "username" });
    this.loginBtn = page.getByRole("button", { name: "Login" });
  }

  public async validateTitle(expectedTitle: string) {
    const pageTitle = await this.page.title();
    if (pageTitle !== expectedTitle) {
      throw new Error(
        `Expected title to be ${expectedTitle} but found ${pageTitle}`
      );
    }
  }

  public async loginAsUser(userName: string) {
    await this.userNameField.fill(userName);
    await this.passwordField.fill(this.password);
    await this.loginBtn.click();
  }

  public async validateLoginError() {
    expect(
      this.page.getByText(
        "Username and password do not match any user in this service"
      )
    );
  }
}

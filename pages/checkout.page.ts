import { Locator, Page, expect } from "@playwright/test";

export class Checkout {
  private readonly page: Page;
  private readonly firstNameField: Locator;
  private readonly lastNameField: Locator;
  private readonly zipCodeField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.getByRole("textbox", { name: "first name" });
    this.lastNameField = page.getByRole("textbox", { name: "last name" });
    this.zipCodeField = page.getByRole("textbox", { name: "zip" });
  }

  public async enterCheckoutInfo(first: string, last: string, zip: string) {
    await this.firstNameField.fill(first);
    await this.lastNameField.fill(last);
    await this.zipCodeField.fill(zip);
  }

  public async validateCheckoutComplete(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }
}

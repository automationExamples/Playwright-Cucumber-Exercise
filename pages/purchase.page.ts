import { Page, expect } from "@playwright/test";

export class Purchase {
  private readonly page: Page;
  private readonly cartButton = "a.shopping_cart_link";
  private readonly checkoutButton = 'button[id="checkout"]';
  private readonly firstNameField = 'input[id="first-name"]';
  private readonly lastNameField = 'input[id="last-name"]';
  private readonly postalCodeField = 'input[id="postal-code"]';
  private readonly continueButton = 'input[id="continue"]';
  private readonly finishButton = 'button[id="finish"]';
  private readonly thankYouText = ".complete-text";

  constructor(page: Page) {
    this.page = page;
  }

  public async selectCart() {
    await this.page.locator(this.cartButton).click();
    await this.page.waitForSelector(this.checkoutButton, { state: "visible" });
  }

  public async selectCheckout() {
    await this.page.locator(this.checkoutButton).click();
    await this.page.waitForSelector(this.firstNameField, { state: "visible" });
  }

  public async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator(this.firstNameField).fill(firstName);
    await this.page.locator(this.lastNameField).fill(lastName);
    await this.page.locator(this.postalCodeField).fill(postalCode);
  }

  public async selectContinue() {
    await this.page.locator(this.continueButton).click();
    await this.page.waitForSelector(this.finishButton, { state: "visible" });
  }

  public async selectFinish() {
    await this.page.locator(this.finishButton).click();
    // 🔑 Wait for order confirmation
    await this.page.waitForSelector(this.thankYouText, { state: "visible" });
  }

  public async validateThankYouText(expectedText: string) {
    const thankYouLocator = this.page.locator(this.thankYouText);
    await expect(thankYouLocator).toBeVisible({ timeout: 10000 });
    await expect(thankYouLocator).toContainText(expectedText);
  }
}

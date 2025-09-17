import { Page } from "@playwright/test";

export class Purchase {
  private readonly page: Page;
  private readonly checkoutButton: string = '[data-test="checkout"]';
  private readonly firstNameInput: string = '[data-test="firstName"]';
  private readonly lastNameInput: string = '[data-test="lastName"]';
  private readonly postalCodeInput: string = '[data-test="postalCode"]';
  private readonly continueButton: string = '[data-test="continue"]';
  private readonly finishButton: string = '[data-test="finish"]';
  private readonly confirmationMessage: string = ".complete-header";

  constructor(page: Page) {
    this.page = page;
  }

  public async clickCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }

  public async fillCheckoutInfo(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
  }

  public async clickContinue() {
    await this.page.locator(this.continueButton).click();
  }

  public async clickFinish() {
    await this.page.locator(this.finishButton).click();
  }

  public async validateConfirmationMessage(expectedMessage: string) {
    const confirmationText = await this.page
      .locator(this.confirmationMessage)
      .textContent();
    if (confirmationText !== expectedMessage) {
      throw new Error(
        `Expected confirmation message to be "${expectedMessage}" but found "${confirmationText}"`
      );
    }
  }
}

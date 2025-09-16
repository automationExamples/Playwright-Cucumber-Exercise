import { Page } from "@playwright/test";

export class Purchase {
  private readonly page: Page;

  private readonly backpackAddToCartButton =
    'button[data-test="add-to-cart-sauce-labs-backpack"]';
  private readonly cartIcon = ".shopping_cart_link";
  private readonly checkoutButton = 'button[data-test="checkout"]';
  private readonly firstNameField = 'input[data-test="firstName"]';
  private readonly lastNameField = 'input[data-test="lastName"]';
  private readonly zipCodeField = 'input[data-test="postalCode"]';
  private readonly continueButton = 'input[data-test="continue"]';
  private readonly finishButton = 'button[data-test="finish"]';
  private readonly confirmationMessage = ".complete-header";

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart() {
    await this.page.locator(this.backpackAddToCartButton).click();
  }

  async selectCart() {
    await this.page.locator(this.cartIcon).click();
  }

  async selectCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }

  async fillCheckoutDetails(
    firstName: string,
    lastName: string,
    zipCode: string
  ) {
    await this.page.locator(this.firstNameField).fill(firstName);
    await this.page.locator(this.lastNameField).fill(lastName);
    await this.page.locator(this.zipCodeField).fill(zipCode);
  }

  async selectContinue() {
    await this.page.locator(this.continueButton).click();
  }

  async selectFinish() {
    await this.page.locator(this.finishButton).click();
  }

  async getConfirmationText(): Promise<string> {
    return this.page.locator(this.confirmationMessage).innerText();
  }
}

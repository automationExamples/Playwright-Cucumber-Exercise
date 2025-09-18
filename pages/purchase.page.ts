import { expect, Page } from "@playwright/test";

export class Purchase {
  private readonly page: Page;
  private readonly backPackToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly shoppingCartLink: string = '.shopping_cart_link';
  private readonly checkoutLink: string = '[data-test="checkout"]';
  private readonly firstName: string = '[data-test="firstName"]';
  private readonly lastName: string = '[data-test="lastName"]';
  private readonly postalCode: string = '[data-test="postalCode"]';
  private readonly continueCheckoutButton: string = '[data-test="continue"]';
  private readonly finishButton: string = '[data-test="finish"]';
  private readonly confirmMessage: string = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.backPackToCart).click();
  }

  public async openCart() {
    await this.page.locator(this.shoppingCartLink).click();
  }

  public async checkout() {
    await this.page.locator(this.checkoutLink).click();
  }

  public async enterCheckoutDetails(first: string, last: string, postal: string) {
    await this.page.locator(this.firstName).fill(first);
    await this.page.locator(this.lastName).fill(last);
    await this.page.locator(this.postalCode).fill(postal);
  }

  public async continueCheckout() {
    await this.page.locator(this.continueCheckoutButton).click();
  }

  public async finishPurchase() {
    await this.page.locator(this.finishButton).click();
  }

  public async validateConfirmationMessage(expectedMessage: string) {
    const confirmationText = await this.page.locator(this.confirmMessage).textContent();

    if (!confirmationText) throw new Error("No confirmation text found!");

    expect(confirmationText.trim()).toBe(expectedMessage);
  }
}

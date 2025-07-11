import { Page, expect } from '@playwright/test';

export class Purchase {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async proceedToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async enterUserDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishPurchase() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async validateSuccessMessage(expectedMessage: string) {
    const messageLocator = this.page.locator('.complete-header');
    await expect(messageLocator).toHaveText(expectedMessage);
  }
}

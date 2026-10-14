import { Page, expect } from "@playwright/test";

export class Purchase {
  private readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async openCart() {
    await this.page.locator('.shopping_cart_link, [data-test="shopping-cart-link"]').click();
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async fillCheckoutInfo(first: string, last: string, zip: string) {
    await this.page.locator('[data-test="firstName"]').fill(first);
    await this.page.locator('[data-test="lastName"]').fill(last);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
  }

  async continue() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async finish() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async expectThankYou() {
    const text = (await this.page.locator('h2.complete-header').textContent())?.trim();
    if (text !== 'Thank you for your order!') {
      throw new Error(`Expected "Thank you for your order!" but got "${text}"`);
    }
  }
}

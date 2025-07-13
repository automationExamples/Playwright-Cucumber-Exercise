import { Page } from "@playwright/test";

export class PurchasePage {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'

    constructor(page: Page) {
        this.page = page;
    }

  async login(username: string, password: string) {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
  }

  async addBackpackToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async clickCheckout() {
    await this.page.click('[data-test="checkout"]');
  }

  async fillCheckoutInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', zip);
  }

  async clickContinue() {
    await this.page.click('[data-test="continue"]');
  }

  async clickFinish() {
    await this.page.click('[data-test="finish"]');
  }

  async getConfirmationText(): Promise<string> {
    return (await this.page.textContent('.complete-header')) ?? '';
  }
}

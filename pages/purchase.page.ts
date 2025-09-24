import { Page } from '@playwright/test';

export class PurchasePage {
  constructor(private page: Page) {}

  async addProduct(productName: string) {
    // Map human-friendly product names to their stable data-test selectors
    const productSelectors: Record<string, string> = {
      "Sauce Labs Backpack": '[data-test="add-to-cart-sauce-labs-backpack"]',
      "Sauce Labs Bike Light": '[data-test="add-to-cart-sauce-labs-bike-light"]',
      "Sauce Labs Bolt T-Shirt": '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
      "Sauce Labs Fleece Jacket": '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
      "Sauce Labs Onesie": '[data-test="add-to-cart-sauce-labs-onesie"]',
      "Test.allTheThings() T-Shirt (Red)": '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    };

    const selector = productSelectors[productName];
    if (!selector) throw new Error(`No selector found for product: ${productName}`);

    await this.page.click(selector);
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }

  async fillCheckoutInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finish() {
    await this.page.click('[data-test="finish"]');
  }

  async getConfirmationText() {
    return this.page.textContent('.complete-header');
  }
}

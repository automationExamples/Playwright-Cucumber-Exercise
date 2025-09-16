import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  private readonly page: Page;

  private readonly checkout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkout = this.page.locator("button#checkout");
  }

  public async clickCheckout() {
    await this.checkout.click();
  }
}

import { Page, expect } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async addItem(name: string) {
    await this.page.waitForURL("**/inventory.html");
    await this.page
      .locator(".inventory_item")
      .filter({ hasText: name })
      .getByRole("button", { name: /add to cart/i })
      .click();
  }
  async openCart() {
    await this.page.getByRole("link", { name: /cart/i }).click();
  }
  async checkout() {
    await this.page.getByRole("button", { name: /checkout/i }).click();
  }
  async fillInfo(first: string, last: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }
  async finish() {
    await this.page.getByRole("button", { name: /finish/i }).click();
  }
  successHeader() {
    return this.page.locator('[data-test="complete-header"]');
  }
}

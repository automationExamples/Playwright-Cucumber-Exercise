import { Page, expect } from "@playwright/test";

export class Product {
  constructor(private page: Page) {}

  async addBackPackToCart() {
    await this.page.waitForURL("**/inventory.html");
    await this.page
      .locator(".inventory_item")
      .filter({ hasText: "Sauce Labs Backpack" })
      .getByRole("button", { name: /add to cart/i })
      .click();

    await expect(this.page.locator(".shopping_cart_badge")).toHaveText("1");
  }
}

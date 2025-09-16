import { Locator } from "@playwright/test";

export class Product {
  private readonly root: Locator;
  private readonly title: Locator;
  private readonly desc: Locator;
  private readonly price: Locator;
  private readonly addToCartBtn: Locator;
  private readonly removeFromCartBtn: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.title = this.root.locator('[data-test="inventory-item-name"]');
    this.price = this.root.locator('[data-test="inventory-item-price"]');
    this.desc = this.root.locator('[data-test="inventory-item-desc"]');
    this.addToCartBtn = this.root.locator('[data-test^="add-to-cart"]');
    this.removeFromCartBtn = this.root.locator('[data-test^="remove"]');
  }

  async getTitle(): Promise<string> {
    return await this.title.innerText();
  }

  async getDesc(): Promise<string> {
    return await this.desc.innerText();
  }

  async getPrice(): Promise<number> {
    const raw = await this.price.innerText();
    // Strip out anything that's not a digit or decimal point
    const numeric = raw.replace(/[^0-9.]/g, "");
    return parseFloat(numeric);
    }

  async addToCart() {
    await this.addToCartBtn.click();
  }

  async removeFromCart() {
    await this.removeFromCartBtn.click();
  }
}
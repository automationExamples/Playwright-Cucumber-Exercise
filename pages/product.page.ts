import { Page } from "@playwright/test";

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly sortDropdown = ".product_sort_container";

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart(): Promise<void> {
    await this.page.locator(this.addToCart).click();
  }

  async sortByOption(optionText: string): Promise<void> {
    await this.page.selectOption(this.sortDropdown, {
      label: optionText,
    });
  }

  public async getProductPrices(): Promise<number[]> {
    const priceTexts = await this.page
      .locator(".inventory_item_price")
      .allTextContents();
    return priceTexts.map((p) => parseFloat(p.replace("$", "")));
  }

  public async getProductNames(): Promise<string[]> {
    return this.page.locator(".inventory_item_name").allTextContents();
  }
}

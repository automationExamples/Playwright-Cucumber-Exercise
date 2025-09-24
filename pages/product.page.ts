import { Page } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  public async sortProducts(option: string) {
    const sortMap: Record<string, string> = {
      "Price (low to high)": "lohi",
      "Price (high to low)": "hilo",
      "Name (A to Z)": "az",
      "Name (Z to A)": "za"
    };

    const value = sortMap[option];
    if (!value) throw new Error(`Unknown sort option: ${option}`);

    // More robust selector
    const dropdown = this.page.locator('select.product_sort_container');

    // Ensure inventory page is loaded
    await this.page.waitForSelector('.inventory_list', { timeout: 10000 });

    // Debug info
    console.log("DEBUG: Dropdown count =",
      await this.page.locator('select.product_sort_container').count()
    );

    await dropdown.scrollIntoViewIfNeeded(); // ensure visible
    await dropdown.waitFor({ state: 'visible', timeout: 10000 });
    await dropdown.selectOption(value);
  }

  public async getProductPrices(): Promise<number[]> {
    const prices = await this.page.$$eval('.inventory_item_price', els =>
      els.map(e => parseFloat((e.textContent || '').replace('$', '')))
    );
    return prices;
  }

  public async arePricesSorted(order: string): Promise<boolean> {
    const prices = await this.getProductPrices();
    const sorted = [...prices].sort((a, b) => (order === 'asc' ? a - b : b - a));
    return JSON.stringify(prices) === JSON.stringify(sorted);
  }
}

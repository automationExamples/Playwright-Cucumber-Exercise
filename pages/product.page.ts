import { Page } from "@playwright/test";

export class Product {
    private readonly page: Page;
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly sortDropdown: string = '//select[@class="product_sort_container"]';
    private readonly itemPrices: string = '.inventory_item_price';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
    const button = this.page.locator(this.addToCart);
    await button.waitFor({ state: 'visible', timeout: 10000 });
    await button.click();
    }

    public async sortItemsBy(sortType: string) {
        // Wait for the products page to be loaded
        await this.page.waitForSelector('.inventory_list', { state: 'visible', timeout: 10000 });
        const dropdown = this.page.locator(this.sortDropdown);
        await dropdown.waitFor({ state: 'visible', timeout: 10000 });
        await dropdown.selectOption({ label: sortType });
    }

   public async validateItemsSortedByPrice(sortType: string): Promise<void> {
  const prices = await this.page.locator(this.itemPrices).allTextContents();

  // Convert to numbers
  const priceNumbers = prices.map(p => parseFloat(p.replace('$', '')));

  // Create expected sorted array
  const sorted = [...priceNumbers].sort((a, b) => {
    if (sortType === "Price (low to high)") return a - b;
    if (sortType === "Price (high to low)") return b - a;
    throw new Error(`Unsupported sort type: ${sortType}`);
  });

  // Compare arrays
  for (let i = 0; i < priceNumbers.length; i++) {
    if (Math.abs(priceNumbers[i] - sorted[i]) > 0.001) {
      throw new Error(
        `Sorting failed at index ${i}. Actual: ${priceNumbers}, Expected: ${sorted}`
      );
    }
  }
}

}
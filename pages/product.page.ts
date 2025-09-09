import { Page } from "@playwright/test"

export class Product {
  private readonly page: Page

  constructor(page: Page) {
    this.page = page;
  }

  // Selects a sort option from the product sort dropdown
  async sortBy(sortOption: string) {

    const sortingvalues: Record<string, string> = {
      'Price (low to high)': 'lohi',
      'Price (high to low)': 'hilo',
    };
    const value = sortingvalues[sortOption];
    if (!value) throw new Error(`Unknown sort option: ${sortOption}`);
    const dropdown = this.page.locator('[data-test="product-sort-container"]');
    await dropdown.selectOption(value);
  }

  // Validates that the products are sorted according to the selected option
  async validateSortedBy(sortOption: string) {
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    const pricesValues = prices.map(p => parseFloat(p.replace('$', '')));
    const sorted = [...pricesValues].sort((a, b) =>
      sortOption === 'Price (low to high)' ? a - b : b - a
    );
    // Compare the actual order to the expected sorted order
    for (let i = 0; i < pricesValues.length; i++) {
      if (pricesValues[i] !== sorted[i]) {
        throw new Error(`Items are not correctly sorted by ${sortOption}`);
      }
    }
  }
}
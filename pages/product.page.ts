import { Page } from "@playwright/test"

// Product page object model class
export class Product {
  // Reference to the Playwright Page instance
  private readonly page: Page

  // Constructor initializes the page instance
  constructor(page: Page) {
    this.page = page;
  }

  // Selects a sort option from the product sort dropdown
  async sortBy(sortOption: string) {
    // Mapping of human-readable sort options to dropdown values
    const sortValues: Record<string, string> = {
      'Price (low to high)': 'lohi',
      'Price (high to low)': 'hilo',
    };
    // Get the value for the given sort option
    const value = sortValues[sortOption];
    if (!value) throw new Error(`Unknown sort option: ${sortOption}`);
    // Locate the sort dropdown and select the desired option
    const dropdown = this.page.locator('[data-test="product-sort-container"]');
    await dropdown.selectOption(value);
  }

  // Validates that the products are sorted according to the selected option
  async validateSortedBy(sortOption: string) {
    // Get all item prices as text
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    // Convert price strings to numbers
    const priceNumbers = prices.map(p => parseFloat(p.replace('$', '')));
    // Sort the prices based on the sort option
    const sorted = [...priceNumbers].sort((a, b) =>
      sortOption === 'Price (low to high)' ? a - b : b - a
    );
    // Compare the actual order to the expected sorted order
    for (let i = 0; i < priceNumbers.length; i++) {
      if (priceNumbers[i] !== sorted[i]) {
        throw new Error(`Items are not sorted by ${sortOption}`);
      }
    }
  }
}
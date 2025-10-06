import { Page } from '@playwright/test';

export class Product {
  private page: Page;
  private sortDropdown = '.product_sort_container';
  private itemPrices = '.inventory_item_price';
  private filterDropdown = '.product_sort_container';
  

  constructor(page: Page) {
    this.page = page;
  }
  
  async sortProducts(sortOption: string) {
    if (sortOption === "Price (low to high)") {
      await this.page.selectOption(this.sortDropdown, "lohi");
    } else if (sortOption === "Price (high to low)") {
      await this.page.selectOption(this.sortDropdown, "hilo");
    }
  }

  async validateSortOrder(sortOption: string) {
  const priceTexts = await this.page.locator(this.itemPrices).allTextContents();
  const prices = priceTexts.map(text => parseFloat(text.replace("$", "")));

  // Print all prices
  console.log("Prices displayed on the page:", prices);

  //  Validate number of items
  if (prices.length !== 6) {
    throw new Error(`Expected 6 items but found ${prices.length}. Prices: ${prices}`);
  } else {
    console.log(`Correct number of products found: ${prices.length}`);
  }

  // Validate sorting order
  let isSorted = false;
  if (sortOption === "Price (low to high)") {
    isSorted = this.isAscending(prices);
  } else if (sortOption === "Price (high to low)") {
    isSorted = this.isDescending(prices);
  }

  if (!isSorted) {
    throw new Error(`Products are NOT sorted correctly for ${sortOption}. Prices: ${prices}`);
  }

  console.log(`All ${prices.length} products are sorted correctly by ${sortOption}.`);
}

  
  private isAscending(prices: number[]): boolean {
    return prices.every((price, i) => i === 0 || price >= prices[i - 1]);
  }

  private isDescending(prices: number[]): boolean {
    return prices.every((price, i) => i === 0 || price <= prices[i - 1]);
  }

  async clickFilter() {
    await this.page.locator(this.filterDropdown).click();
  }


  async printFilterOptions() {
    const options = await this.page.locator(this.filterDropdown).evaluate((select: HTMLSelectElement) => {
      return Array.from(select.options).map(option => option.text);
    });

    console.log('Filter options:', options);
    return options; 
  }
}




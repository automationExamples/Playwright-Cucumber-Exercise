// src/pages/product.page.ts
import { Page } from '@playwright/test';

// Product class to handle product-related actions on the page
export class Product {
  private readonly page: Page;
  private readonly addToCart = 'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly shoppingCartIcon = '[data-test="shopping-cart-link"]';
  private readonly sortByDropdown = '[data-test="product-sort-container"]';
  private readonly inventoryPrices = '[data-test="inventory-item-price"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Method to select a sort option from the dropdown
  public async selectSortByOption(sortOption: string) {
    await this.page.locator(this.sortByDropdown).selectOption(sortOption);
  }

  // Method to validate the product page price sorting
  public async validateProductPagePriceSort(sortOption: string): Promise<boolean> {
    const inventoryPriceArray: string[] = [];
    const inventoryPrices = this.page.locator(this.inventoryPrices);
    const inventoryCount = await inventoryPrices.count();

    // Collect all inventory prices into an array
    for (let i = 0; i < inventoryCount; i++) {
      const itemPrice = (await inventoryPrices.nth(i).textContent())?.trim();
      if (itemPrice) {
        inventoryPriceArray.push(itemPrice);
      }
    }

    const priceNumbers = inventoryPriceArray.map(price => parseFloat(price));

    // Validate the sorting based on the selected option
    if (sortOption === 'Price (low to high)') {
      for (let i = 0; i < priceNumbers.length - 1; i++) {
        if (priceNumbers[i] > priceNumbers[i + 1]) {
          throw new Error(`Price is not sorted ascending. Prices: ${inventoryPriceArray.join(', ')}`);
        }
      }
    } else if (sortOption === 'Price (high to low)') {
      for (let i = 0; i < priceNumbers.length - 1; i++) {
        if (priceNumbers[i] < priceNumbers[i + 1]) {
          throw new Error(`Price is not sorted descending. Prices: ${inventoryPriceArray.join(', ')}`);
        }
      }
    } else {
      throw new Error(`Sort criteria not recognized: ${sortOption}`);
    }

    return true;
  }

  // Method to add the backpack to the cart
  public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  // Method to click on the shopping cart icon
  public async clickShoppingCart() {
    await this.page.locator(this.shoppingCartIcon).click();
  }
}

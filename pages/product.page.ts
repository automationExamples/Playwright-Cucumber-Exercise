// import { expect, Page } from "@playwright/test"
// import { waitForDebugger } from "inspector";

// export class Product {
//     private readonly page: Page
//     private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
//     private readonly selectSort: string = 'select[data-test="product-sort-container"]'
//     constructor(page: Page) {
//         this.page = page;
//     }

//     public async addBackPackToCart() {
//         await this.page.locator(this.addToCart).click()
//     }

//     public async doSort(sort: string) {
//         await this.page.locator(this.selectSort).selectOption({ label: sort });
//     }

//     public async validatePriceSort() {
//         // Grab all price elements from the page
//         const priceElements = await this.page.$$('[data-test="inventory-item-price"]');

//         const prices: number[] = [];

//         for (const el of priceElements) {
//             const text = await el.textContent();

//             if (!text) {
//                 throw new Error("Price element has no text content!");
//             }

//             prices.push(parseFloat(text.replace('$', '')));
//         }

//         // ✅ Validate there are 6 items
//         expect(prices.length).toBe(6);

//         // ✅ Check if prices are sorted ascending
//         const sortedPrices = [...prices].sort((a, b) => a - b);
//         expect(prices).toEqual(sortedPrices);
//     }

// }

import { expect, Page } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly selectSort: string = 'select[data-test="product-sort-container"]';

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  public async doSort(sort: string) {
    await this.page.locator(this.selectSort).selectOption({ label: sort });
  }

  public async validatePriceSort(order: string) {
    // Grab all price elements
    const priceElements = await this.page.$$('[data-test="inventory-item-price"]');

    const prices: number[] = [];

    for (const el of priceElements) {
      const text = await el.textContent();

      if (!text) throw new Error("Price element has no text content!");

      prices.push(parseFloat(text.replace('$', '')));
    }

    // ✅ Validate there are 6 items
    expect(prices.length).toBe(6);

    // ✅ Create sorted copy based on order
    const sortedPrices =
      order === 'descending'
        ? [...prices].sort((a, b) => b - a)
        : [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
  }
}

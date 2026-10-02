import { expect, Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = '[data-test="product-sort-container"]'
    private readonly productPrices: string = '[data-test="inventory-item-price"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

     public async sortItems(sort: string) {
        await this.page.locator(this.sortDropdown).selectOption({
            label: sort
        });
    }


public async validateItemsSortedByPrice(numberOfItems: number, sort: string) {
  const priceCells = this.page.locator(this.productPrices);
  await expect(priceCells).toHaveCount(numberOfItems);

  const priceTexts = await priceCells.allTextContents();

  const prices: number[] = [];
  for (const text of priceTexts) {
    prices.push(parseFloat(text.replace('$', '')));
  }

  
  const isHighToLow = sort === 'Price (high to low)';

  for (let i = 1; i < prices.length; i++) {
    if (isHighToLow) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i - 1]);
    } else {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
    }
   }
  }

  public async validateItemsSortedByName(
    numberOfItems: number,
    sort: string) {
    const productNames = this.page.locator('[data-test="inventory-item-name"]');

    await expect(productNames).toHaveCount(numberOfItems);

    const names = await productNames.allTextContents();

    const sortedNames = [...names].sort((a, b) =>
        sort === 'Name (A to Z)'
            ? a.localeCompare(b)
            : b.localeCompare(a)
    );

    expect(names).toEqual(sortedNames);
 }

}
import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    async sortBy(sortLabel: string) {
    await this.page.selectOption('select[data-test="product-sort-container"]', { label: sortLabel });
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.page.$$eval('.inventory_item_price', elements =>
      elements.map(e => parseFloat(e.textContent?.replace('$', '') || '0'))
    );
    return prices;
  }
}
import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[data-test="product-sort-container"]'
    private readonly priceElements: string  = '[data-test="inventory-item-price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectSortOption(optionText: string) {
        const selectDropdown = await this.page.locator(this.sortDropdown)
        await selectDropdown.selectOption({ label: optionText });
  }

    public async getDisplayedPrices() {
        const priceElements = await this.page.locator(this.priceElements)
        const prices = await priceElements.allTextContents();
        return prices.map(p => parseFloat(p.replace('$', '')));
  }

}
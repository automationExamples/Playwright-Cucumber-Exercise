import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = '[data-test="product-sort-container"]'
    private readonly productPrices: string = '.inventory_item_price'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async sortProductsBy(sortOption: string) {
    await this.page.locator(this.sortDropdown).selectOption({ label: sortOption })
}

public async validatePricesSorted(order: string) {
    const priceTexts = await this.page.locator(this.productPrices).allTextContents()

    const actualPrices = priceTexts.map(price =>
        Number(price.replace('$', ''))
    )

    let expectedPrices: number[]

    if (order === 'ascending') {
        expectedPrices = [...actualPrices].sort((a, b) => a - b)
    } else {
        expectedPrices = [...actualPrices].sort((a, b) => b - a)
    }

    expect(actualPrices).toEqual(expectedPrices)
}
}
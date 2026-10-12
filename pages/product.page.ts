import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartLink: string = '.shopping_cart_link'
    private readonly sortDropdown: string = 'select.product_sort_container'
    private readonly itemPrices: string = '.inventory_item_price'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async openCart() {
        await this.page.locator(this.cartLink).click()
    }

    public async sortBy(optionLabel: string) {
        await this.page.locator(this.sortDropdown).selectOption({ label: optionLabel })
    }
 
    public async validateSortedByPrice(expectedCount: number, order: string) {
        const texts = await this.page.locator(this.itemPrices).allInnerTexts()
        const prices = texts.map(text => parseFloat(text.replace('$', '')))
        expect(prices).toHaveLength(expectedCount)
        const sorted = [...prices].sort((a, b) => order === 'ascending' ? a - b : b - a)
        expect(prices).toEqual(sorted)
    }
}
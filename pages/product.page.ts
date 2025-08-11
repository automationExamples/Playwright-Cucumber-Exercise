import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = '[data-test="product-sort-container"]'
    private readonly priceSelector: string = '.inventory_item_price'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortItems(sortType: string) {
        await this.page.selectOption(this.sortDropdown, {label: sortType})
    }

    public async verifyPriceIsSorted(sortKey: 'lohi' | 'hilo') {
        const priceTexts = await this.page.locator(this.priceSelector).allTextContents()
        const prices = priceTexts.map(text => parseFloat(text.replace('$', '')))
        let expected : number[]

        if (sortKey === 'lohi') {
            expected = [...prices].sort((a, b) => a - b)
        } else if (sortKey === 'hilo') {
            expected = [...prices].sort((a, b) => b - a)    
        } else {
            throw new Error('Unsupported sort key ${sortkey}')
        }
        expect(prices).toEqual(expected)
    }

    public async validatePrices() {
        const selectedType = await this.page.locator(this.sortDropdown).inputValue()
        await this.verifyPriceIsSorted(selectedType as 'lohi' | 'hilo')
    }


}
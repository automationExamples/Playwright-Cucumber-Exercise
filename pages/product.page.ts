import { expect } from "@playwright/test";
import { Page } from "playwright"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = '[data-test="product-sort-container"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    async sortProductsBy(sortOrder: string) {
        await this.page.locator(this.sortDropdown).selectOption({ label: sortOrder });
    }

    async validateProductsSortedBy(sortOrder: string) {
        const priceElements = await this.page.$$eval('.inventory_item_price', (elements) =>
            elements.map((el) => el.textContent).filter(text => text !== null)
        );
        const actualPrices = priceElements.map(price => parseFloat(price!.replace('$', '')));
        let expectedPrices;
        if (sortOrder === 'Price (low to high)') {
            expectedPrices = [...actualPrices].sort((a, b) => a - b);
        } else if (sortOrder === 'Price (high to low)') {
            expectedPrices = [...actualPrices].sort((a, b) => b - a);
        } else {
            throw new Error('Invalid sort order provided in the test case.');
        }
        expect(actualPrices).toEqual(expectedPrices);
    }
}
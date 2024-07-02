import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly filter: string = '//*[@id="header_container"]/div[2]/div/span/select'
    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async applyFilter(sort: string) {
        await this.page.locator(this.filter).selectOption(sort)

    }

    public async verifySorting(sortType: string) {
        const itemPrices = await this.page.$$eval('.inventory_item_price', elements =>
            elements.map(element => parseFloat(element.textContent?.replace('$', ' ').trim() || '0'))

        );

        let sortedItemPrices: number[] = [];

        if (sortType === 'Price (low to high)') {
            // Create a sorted copy of the item prices array
            sortedItemPrices = [...itemPrices].sort((a, b) => a - b);
        } else if (sortType === 'Price (high to low)') {
            // Create a sorted copy of the item prices array
            sortedItemPrices = [...itemPrices].sort((a, b) => b - a);
        }

        // Compare the original array with the sorted array
        expect(itemPrices).toEqual(sortedItemPrices);

    }

}
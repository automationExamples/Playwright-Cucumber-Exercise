import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly itemPrice: string = 'div[class="inventory_item_price"]'
    private readonly sortContainer: string = 'select[class="product_sort_container"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectSort(sortOption: string) {
        await this.page.locator(this.sortContainer).selectOption(sortOption)
    }

    public async validateSort(sortOrder: string) {
        let originalPrices = await this.page.locator(this.itemPrice).all()
        const prices: number[] = [];

        for(const element of originalPrices){
            const priceText = await element.textContent();
            const price = parseFloat(priceText?.replace('$', '') || "0");
            prices.push(price);
        }

        let expectedPrices: number[] = [];

        if (sortOrder === 'Price (low to high)') {
            expectedPrices = [...prices].sort((a,b) => b - a )
        }

        else if (sortOrder === 'Price (high to low)') {
            expectedPrices = [...prices].sort((a,b) => a - b )
        }

        else {
            throw new Error("Invalid sort order");
        }
        expect(prices).toEqual(expectedPrices);
    }
}
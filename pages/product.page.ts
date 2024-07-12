import {Page} from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[class="product_sort_container"]'
    private readonly productPrice: string = 'div[class="inventory_item_price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortItemsBy(sortType: string) {
        await this.page.locator(this.sortDropdown).selectOption({ label: sortType });
    }

    public async validateItemsSortedCorrectlyByPrice(sortType: string) {
        const prices = await this.page.$$eval(this.productPrice, elements => elements.map(element => parseFloat((element.textContent || '').replace('$', ''))));
        const sortedPrices = [...prices].sort((a, b) => sortType === 'Price (high to low)' ? b - a : a - b);
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] !== sortedPrices[i]) {
                throw new Error('Items are not sorted correctly by price');
            }
        }
    }

    public async getItems(): Promise<number[]> {
        return this.page.$$eval(this.productPrice, elements =>
            elements.map(element => parseFloat((element.textContent || '').replace('$', '')))
        );
    }
}
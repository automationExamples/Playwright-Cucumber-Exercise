import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[data-test="product_sort_container"]';
    private readonly inventoryItems: string = '.inventory_item_price';


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async sortByPrice(order: string) {
        await this.page.selectOption(this.sortDropdown, order === 'asc' ? 'lohi' : 'hilo');
    }

    public async getProductPrices(): Promise<number[]> {
        const prices = await this.page.locator(this.inventoryItems).allTextContents();
        return prices.map(price => parseFloat(price.replace('$', '')));
    }

}
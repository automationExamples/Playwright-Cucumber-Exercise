import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = '.product_sort_container';
    private readonly productPrices: string = '.inventory_item_price';


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortProductsBy(option: string) {
        await this.page.locator(this.sortDropdown).selectOption({ label: option });
    }

    public async getProductPrices(): Promise<number[]> {
        const pricesText = await this.page.locator(this.productPrices).allTextContents();
        return pricesText.map(price => parseFloat(price.replace('$', '')));
    }
}
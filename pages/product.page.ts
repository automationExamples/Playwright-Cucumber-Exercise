import { Page } from "@playwright/test";

export class Product {
    private readonly page: Page;
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly removeFromCartButton: string = 'button[id="remove-sauce-labs-backpack"]';
    private readonly cartButton: string = 'a[data-test="shopping-cart-link"]';
    private readonly sortDropdown: string = 'select[data-test="product-sort-container"]';
    private readonly productPrices: string = '.inventory_item_price';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }

    public async removeBackPackFromCart() {
        await this.page.locator(this.removeFromCartButton).click();
    }

    public async goToCart() {
        await this.page.locator(this.cartButton).click();
    }

    public async sortItems(sortOption: string) {
        await this.page.selectOption(this.sortDropdown, sortOption);
    }

    public async getPrices(): Promise<number[]> {
        const pricesText = await this.page.locator(this.productPrices).allTextContents();
        return pricesText.map(priceText => parseFloat(priceText.replace('$', '')));
    }

    public async validatePricesSorted(order: 'asc' | 'desc') {
        const prices = await this.getPrices();
        const sortedPrices = [...prices].sort((a, b) => order === 'asc' ? a - b : b - a);
        if (JSON.stringify(prices) !== JSON.stringify(sortedPrices)) {
            throw new Error(`Prices are not sorted correctly. Expected ${JSON.stringify(sortedPrices)} but got ${JSON.stringify(prices)}`);
        }
    }
}

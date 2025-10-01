import { Page, expect } from "@playwright/test";

export class Product {
    private readonly page: Page;
    private readonly addToCart = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly sortDropdown = 'select[data-test="product-sort-container"]';
    private readonly productPrices = '.inventory_item_price';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }
    public async sortItems(sortOption: string) {
        const valueMap: Record<string, string> = {
            'Price (low to high)': 'lohi',
            'Price (high to low)': 'hilo',
            'Name (A to Z)': 'az',
            'Name (Z to A)': 'za',
        };

        const value = valueMap[sortOption];
        if (!value) throw new Error(`Unknown sort option: ${sortOption}`);

        const dropdown = this.page.locator(this.sortDropdown);
        await dropdown.waitFor({ state: 'visible', timeout: 10000 });

        await dropdown.selectOption(value);

        await this.page.waitForTimeout(500);
    }

    public async validatePriceSort(sortOrder: string) {
        const prices = await this.page.locator(this.productPrices).allTextContents();
        const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

        const sorted = [...numericPrices].sort((a, b) => a - b);
        if (sortOrder === 'Price (high to low)') {
            sorted.reverse();
        }

        expect(numericPrices).toEqual(sorted);
    }
}

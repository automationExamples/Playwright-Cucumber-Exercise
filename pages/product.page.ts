import { Page } from "@playwright/test";

export class Product {
    private readonly page: Page;
    private readonly backpackAddToCartButton: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly sortSelect: string = 'select[data-test="product_sort_container"]';
    private readonly productPrices: string = '.inventory_item_price';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.backpackAddToCartButton).click();
    }

    public async sortByPrice(sortOrder: string) {
        await this.page.locator(this.sortSelect).selectOption({ label: sortOrder });
    }

    public async validateProductsSortedByPrice(sortOrder: string) {
        const prices = await this.page.locator(this.productPrices).allTextContents();
        const numericPrices = prices.map(price => parseFloat(price.replace('$', '')));
        const sortedPrices = [...numericPrices];
        sortOrder === 'Price (low to high)' ? sortedPrices.sort((a, b) => a - b) : sortedPrices.sort((a, b) => b - a);
        if (JSON.stringify(numericPrices) !== JSON.stringify(sortedPrices)) {
            throw new Error(`Products are not sorted correctly by ${sortOrder}`);
        }
    }
}

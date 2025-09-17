import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortProductsBy(sortOption: string) {
    const sortDropdown = '.product_sort_container';
    await this.page.selectOption(sortDropdown, { label: sortOption });
    // Wait for sort to complete
    await this.page.waitForTimeout(1000);
}

public async validateProductSort(order: string) {
    const priceElements = await this.page.$$('.inventory_item_price');
    const prices: number[] = [];
    
    for (const element of priceElements) {
        const priceText = await element.textContent();
        const price = parseFloat(priceText?.replace('$', '') || '0');
        prices.push(price);
    }
    
    const isAscending = order === 'ascending';
    const sortedPrices = [...prices].sort((a, b) => isAscending ? a - b : b - a);
    
    if (JSON.stringify(prices) !== JSON.stringify(sortedPrices)) {
        throw new Error(`Products are not sorted in ${order} order. Expected: ${sortedPrices}, Found: ${prices}`);
    }

}
}
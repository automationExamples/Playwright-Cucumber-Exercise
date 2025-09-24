import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortSelect: string = 'select[data-test="product-sort-container"]'
    private readonly priceLocator: string = '.inventory_item_price'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    // New: select the sort option. Accepts human readable values like:
    // "Price (low to high)" or "Price (high to low)"
    public async sortBy(option: string) {
        await this.page.waitForSelector(this.sortSelect, { state: 'visible' });
        let value = '';
        const lower = option.toLowerCase();
        if (lower.includes('low') && lower.includes('high') || lower.includes('low to high') || lower.includes('lohi')) {
            value = 'lohi';
        } else if (lower.includes('high') && lower.includes('low') || lower.includes('high to low') || lower.includes('hilo')) {
            value = 'hilo';
        } else if (lower.includes('az')) {
            value = 'az';
        } else if (lower.includes('za')) {
            value = 'za';
        } else {
            // default to low -> high if unrecognised
            value = 'lohi';
        }
        await this.page.selectOption(this.sortSelect, value);
    }

    // New: return prices as numbers in the order shown on the page
    public async getItemPrices(): Promise<number[]> {
        const texts = await this.page.locator(this.priceLocator).allTextContents();
        return texts.map(t => parseFloat(t.replace(/[^0-9.]/g, ''))).filter(n => !Number.isNaN(n));
    }

    // New: validate that prices are sorted according to the requested order
    public async validatePricesSorted(order: 'low-to-high' | 'high-to-low') {
        const prices = await this.getItemPrices();
        if (prices.length === 0) {
            throw new Error('No prices found on the products page to validate sorting.');
        }
        const sorted = [...prices].sort((a, b) => a - b);
        if (order === 'high-to-low') {
            sorted.reverse();
        }
        for (let i = 0; i < prices.length; i++) {
            if (Math.abs(prices[i] - sorted[i]) > 0.0001) {
                throw new Error(`Products are not sorted as expected. Found: ${JSON.stringify(prices)}, Expected: ${JSON.stringify(sorted)}`);
            }
        }
    }
}
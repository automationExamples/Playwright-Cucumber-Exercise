import { Page } from '@playwright/test';

export class Product {
    private readonly page: Page;
    private readonly sortDropdown = '[data-test="product_sort_container"]';
    private readonly priceLabels = '.inventory_item_price';
    constructor(page: Page) {
        this.page = page;
    }

public async sortProducts(optionLabel: string) {
    await this.page.locator(this.sortDropdown).selectOption({ label: optionLabel });
}

public async getAllPrices(): Promise<number[]> {
    const textPrices = await this.page.locator(this.priceLabels).allTextContents();return textPrices.map(price => Number(price.replace('$', '').trim()));
}

public async validateLowToHigh(): Promise<boolean> {
    const prices = await this.getAllPrices();
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[i - 1]) 
            return false;
    }
    return true;
}

public async validateHighToLow(): Promise<boolean> {
    const prices = await this.getAllPrices();
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) 
            return false;
        }
        return true;
    }
}
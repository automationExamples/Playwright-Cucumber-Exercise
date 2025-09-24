import { Page } from "@playwright/test"
import * as fs from 'fs';
import * as path from 'path';

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    async sortBy(sortLabel: string) {
        await this.page.selectOption('select[data-test="product-sort-container"]', { label: sortLabel });
    }

    async getProductPrices(): Promise<number[]> {
        const prices = await this.page.$$eval('.inventory_item_price', elements =>
            elements.map(e => parseFloat(e.textContent?.replace('$', '') || '0'))
        );
        return prices;
    }

    async getProductNames(): Promise<string[]> {
        const names = await this.page.$$eval('.inventory_item_name', elements =>
            elements.map(e => e.textContent || '')
        );
        return names;
    }

    async getAllProductsData(): Promise<{ name: string; price: number; }[]> {
        const names = await this.getProductNames();
        const prices = await this.getProductPrices();
        return names.map((name, index) => ({
            name,
            price: prices[index]
        }));
    }

    async validateProductsAgainstJSON(): Promise<boolean> {
        const actualProducts = await this.getAllProductsData();
        const jsonPath = path.join(process.cwd(), 'testdata', 'products.json');
        const expectedData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        
        const actualSorted = actualProducts.sort((a, b) => a.name.localeCompare(b.name));
        const expectedSorted = expectedData.products.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));

        return JSON.stringify(actualSorted) === JSON.stringify(expectedSorted);
    }
}
import { Page } from "@playwright/test"
import { expect } from '@playwright/test';

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortSelector: string = '//select[@data-test="product-sort-container"]';
    private readonly itemNameSelector: string = '//div[@data-test="inventory-item-name"]';
    private readonly itemPriceSelector: string = '//div[@data-test="inventory-item-price"]';
  

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    async sortItemsBy(sortOption: string) {
        let sortValue;
        switch (sortOption) {
            case 'Name (A to Z)':
                sortValue = 'az';
                break;
            case 'Name (Z to A)':
                sortValue = 'za';
                break;
            case 'Price (low to high)':
                sortValue = 'lohi';
                break;
            case 'Price (high to low)':
                sortValue = 'hilo';
                break;
            default:
                throw new Error('Unexpected sort option');
        }
        await this.page.selectOption(this.sortSelector, sortValue);
    }
    async validateItemsSortedBy(sortOption: string) {
        if (sortOption === 'Name (A to Z)' || sortOption === 'Name (Z to A)') {
            const itemNames = await this.page.$$eval(this.itemNameSelector, names =>
                names.map(name => name.textContent || '')
            );

            const sortedNamesAsc = [...itemNames].sort((a, b) => a.localeCompare(b));
            const sortedNamesDesc = [...itemNames].sort((a, b) => b.localeCompare(a));

            const selectedSortOption = await this.page.$eval(this.sortSelector, el => (el as HTMLSelectElement).value);

            if (selectedSortOption === 'az') {
                expect(itemNames).toEqual(sortedNamesAsc);
            } else if (selectedSortOption === 'za') {
                expect(itemNames).toEqual(sortedNamesDesc);
            } else {
                throw new Error('Unexpected sort option');
            }
        } else if (sortOption === 'Price (low to high)' || sortOption === 'Price (high to low)') {
            const itemPrices = await this.page.$$eval(this.itemPriceSelector, prices =>
                prices.map(price => parseFloat((price.textContent || '').replace('$', '')))
            );

            const sortedPricesAsc = [...itemPrices].sort((a, b) => a - b);
            const sortedPricesDesc = [...itemPrices].sort((a, b) => b - a);

            const selectedSortOption = await this.page.$eval(this.sortSelector, el => (el as HTMLSelectElement).value);

            if (selectedSortOption === 'lohi') {
                expect(itemPrices).toEqual(sortedPricesAsc);
            } else if (selectedSortOption === 'hilo') {
                expect(itemPrices).toEqual(sortedPricesDesc);
            } else {
                throw new Error('Unexpected sort option');
            }
        } else {
            throw new Error('Unexpected sort option');
        }
    }
}
import { Page, expect } from '@playwright/test';

export class Product {

    private readonly page: Page;

    private readonly addToCart: string =
        'button[id="add-to-cart-sauce-labs-backpack"]';

    private readonly sortDropdown: string =
        '[data-test="product-sort-container"]';

    private readonly productPrices: string =
        '.inventory_item_price';

    private readonly productNames: string =
        '.inventory_item_name';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }

    public async selectSortOption(sort: string) {

        switch (sort) {

            case 'Name (A to Z)':
                await this.page
                    .locator(this.sortDropdown)
                    .selectOption('az');
                break;

            case 'Name (Z to A)':
                await this.page
                    .locator(this.sortDropdown)
                    .selectOption('za');
                break;

            case 'Price (low to high)':
                await this.page
                    .locator(this.sortDropdown)
                    .selectOption('lohi');
                break;

            case 'Price (high to low)':
                await this.page
                    .locator(this.sortDropdown)
                    .selectOption('hilo');
                break;

            default:
                throw new Error(`Sort option not supported: ${sort}`);
        }
    }

    public async validatePriceSorting(direction: string) {

        const priceTexts = await this.page
            .locator(this.productPrices)
            .allTextContents();

        const actualPrices = priceTexts.map(price =>
            Number(price.replace('$', ''))
        );

        expect(actualPrices).toHaveLength(6);

        const expectedPrices = [...actualPrices].sort(
            (a, b) => a - b
        );

        if (direction === 'descending') {
            expectedPrices.reverse();
        }

        expect(actualPrices).toEqual(expectedPrices);
    }

    public async validateNameSorting(direction: string) {

        const actualNames = await this.page
            .locator(this.productNames)
            .allTextContents();

        expect(actualNames).toHaveLength(6);

        const expectedNames = [...actualNames].sort(
            (a, b) => a.localeCompare(b)
        );

        if (direction === 'descending') {
            expectedNames.reverse();
        }

        expect(actualNames).toEqual(expectedNames);
    }
}
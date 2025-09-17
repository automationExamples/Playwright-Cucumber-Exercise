import { Page, expect } from "@playwright/test";

export class Product {
    private readonly page: Page;
    private readonly addToCart: string = "button[id='add-to-cart-sauce-labs-backpack']";
    private readonly sortDropdown: string = "select.product_sort_container";
    private readonly priceTags: string = ".inventory_item_price";
    private readonly nameTags: string = ".inventory_item_name";

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }

    async selectSortOption(optionLabel: string) {
        const optionMap: Record<string, string> = {
            "Name (A to Z)": "az",
            "Name (Z to A)": "za",
            "Price (low to high)": "lohi",
            "Price (high to low)": "hilo",
        };

        const value = optionMap[optionLabel];
        if (!value) throw new Error(`Unknown sort option: "${optionLabel}"`);
        await this.page.locator(this.sortDropdown).selectOption(value);
    }

    async getAllProductPrices(): Promise<number[]> {
        const pricesText = await this.page.locator(this.priceTags).allTextContents();
        return pricesText.map((price) => parseFloat(price.replace("$", "").trim()));
    }

    async getAllProductNames(): Promise<string[]> {
        const names = await this.page.locator(this.nameTags).allTextContents();
        return names.map((n) => (n || '').trim());
    }

    async getCurrentSortOptionLabel(): Promise<string> {
        const selected = await this.page.locator(`${this.sortDropdown} option:checked`).textContent();
        return (selected || "").trim();
    }

    public async validatePricesSortOrder(expectedCount: number) {
        const prices = await this.getAllProductPrices();

        if (prices.length !== expectedCount) {
            throw new Error(`Expected ${expectedCount} products but found ${prices.length}`
            );
        }

        const currentSort = await this.getCurrentSortOptionLabel();

        const pricesCopy = [...prices];
        let sortedPrices: number[];

        if (currentSort === "Price (low to high)" || currentSort === "Price (high to low)") {

            if (currentSort === "Price (low to high)") {
                sortedPrices = pricesCopy.sort((a, b) => a - b); //acesending
            } else {
                sortedPrices = pricesCopy.sort((a, b) => b - a);
            }

            expect(prices).toEqual(sortedPrices);
        }
    }

    public async validateNamesSortOrder(expectedCount: number) {
        const names = await this.getAllProductNames();

        if (names.length !== expectedCount) {
            throw new Error(`Expected ${expectedCount} products but found ${names.length}`);
        }

        const currentSort = await this.getCurrentSortOptionLabel();

        const namesCopy = [...names];
        let sortedNames: string[];

        if (currentSort === "Name (A to Z)") {
            sortedNames = namesCopy.sort((a, b) => a.localeCompare(b));
        } else {
            sortedNames = namesCopy.sort((a, b) => b.localeCompare(a));
        }

        expect(names).toEqual(sortedNames);
    }

    public async validateSorOrder(expectedCount: number, type: string) {
        if (type === 'price') {
            await this.validatePricesSortOrder(expectedCount);
            return;
        }

        if (type === 'name') {
            await this.validateNamesSortOrder(expectedCount);
            return;
        }

        throw new Error(`Unknown sort type: ${type}`);
    }
}

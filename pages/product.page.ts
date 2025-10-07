import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = '.product_sort_container'
    private readonly inventoryItems: string = '.inventory_item'
    private readonly itemPrices: string = '.inventory_item_price'
    private readonly cartBadge: string = '.shopping_cart_badge'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortProducts(sortOption: string) {
        await this.page.locator(this.sortDropdown).selectOption(sortOption);
    }

    public async validateSortOrder(sortOption: string) {
        // Wait for the page to be sorted
        await this.page.waitForTimeout(1000);
        
        const priceElements = await this.page.locator(this.itemPrices).all();
        const prices: number[] = [];
        
        for (const element of priceElements) {
            const priceText = await element.textContent();
            const price = parseFloat(priceText?.replace('$', '') || '0');
            prices.push(price);
        }
        
        let isSorted = false;
        if (sortOption === 'Price (low to high)') {
            isSorted = this.isAscendingSorted(prices);
        } else if (sortOption === 'Price (high to low)') {
            isSorted = this.isDescendingSorted(prices);
        }
        
        if (!isSorted) {
            throw new Error(`Products are not sorted correctly by ${sortOption}. Actual order: ${prices.join(', ')}`);
        }
    }

    private isAscendingSorted(prices: number[]): boolean {
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[i - 1]) {
                return false;
            }
        }
        return true;
    }

    private isDescendingSorted(prices: number[]): boolean {
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                return false;
            }
        }
        return true;
    }

    public async validateCartIsEmpty() {
        const cartBadge = this.page.locator(this.cartBadge);
        const isVisible = await cartBadge.isVisible();
        if (isVisible) {
            throw new Error('Expected cart to be empty but it contains items');
        }
    }

    public async validateCartHasItems() {
        const cartBadge = this.page.locator(this.cartBadge);
        const isVisible = await cartBadge.isVisible();
        if (!isVisible) {
            throw new Error('Expected cart to have items but it is empty');
        }
    }
}
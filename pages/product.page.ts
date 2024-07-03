import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartButton: string = '//div[@id="shopping_cart_container"]'
    private readonly sortDropdown: string = '//select[@class="product_sort_container"]'
    private readonly inventoryItemNameSelector: string = '.inventory_item_name';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
 
    public async clickOnCartButton() {
        await this.page.locator(this.cartButton).click()
    }

    public async sortItemsBy(sortOrder: string) {
        await this.page.locator(this.sortDropdown).selectOption({ label: sortOrder });
    }
 
    public async verifyProductOrder(sortOrder: string) {
        const itemPrices = await this.page.$$eval('.inventory_item_price', elements =>
            elements.map(element => parseFloat(element.textContent?.replace('$', ' ').trim() || '0'))

        );

        let sortedItemPrices: number[] = [];

        if (sortOrder === 'Price (low to high)') {
            // Create a sorted copy of the item prices array
            sortedItemPrices = [...itemPrices].sort((a, b) => a - b);
        } else if (sortOrder === 'Price (high to low)') {
            // Create a sorted copy of the item prices array
            sortedItemPrices = [...itemPrices].sort((a, b) => b - a);
        } 

        // Compare the original array with the sorted array
        expect(itemPrices).toEqual(sortedItemPrices);
    }

    public async validateProducts(expectedOrder: string[]): Promise<void> {
        for (let i = 0; i < expectedOrder.length; i++) {
            const productName = await this.page.locator(this.inventoryItemNameSelector).nth(i).textContent();
            if (productName !== null) {
                //console.log(`Product ${i}: ${productName.trim()}`); // Add this line for debugging
                expect(productName.trim()).toEqual(expectedOrder[i]);
            }
        }
    }

}
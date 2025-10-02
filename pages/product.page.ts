import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[class="product_sort_container"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortItemsByPrice(sort: string) {
        await this.page.locator(this.sortDropdown).selectOption({ value: sort });
    }

    public async validateItemsSortedByPrice(order: string) {
        const items = await this.page.locator('.inventory_item_price').allTextContents();
        const sortedItems = [...items].sort((a, b) => {
            const priceA = parseFloat(a.replace('$', ''));
            const priceB = parseFloat(b.replace('$', ''));
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
        if (JSON.stringify(items) !== JSON.stringify(sortedItems)) {
            throw new Error(`Items are not sorted by price in ${order} order.`);
        } else {
            console.log(`Items are correctly sorted by price in ${order} order.`);
        }
    }
}
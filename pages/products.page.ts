import { Page } from "@playwright/test"

export class Products {

    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[class="product_sort_container"]'

    constructor(page: Page) {
        this.page = page;
    }


    public async sortItemsByAlphabet(sortOption: string) {
        await this.page.locator(this.sortDropdown).selectOption({ value: sortOption });
    }

    public async validateItemsSortedAlphabetically(order: string) {
        const items = await this.page.locator('.inventory_item_name').allTextContents();
        const sortedItems = [...items].sort((a, b) => {
            return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
        });
        if (JSON.stringify(items) !== JSON.stringify(sortedItems)) {
            throw new Error(`Items are not sorted alphabetically in ${order} order.`);
        } else {
            console.log(`Items are correctly sorted alphabetically in ${order} order.`);
        }
    }
}
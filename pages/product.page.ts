import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[class="product_sort_container"]'
    private readonly itemPrice: string = '[class="inventory_item_price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectSortOption(sortOption: string) {
        await this.page.locator(this.sortDropdown).selectOption(sortOption);
    }

    public async validateSortedItems(sortOption: string) {
        const items = await this.page.locator(this.itemPrice).allTextContents();
        const prices = items.map(item => Number(item.replace("$","")));

        var isSorted = true;

        if (sortOption == "Price (high to low)") {
            for (let i = 0; i < prices.length - 1; i++) {
                if (prices[i] < prices[i + 1]) {
                    isSorted = false;
                    break;
                }
            }
        }

        if (sortOption == "Price (low to high)") {
            for (let i = 0; i < prices.length - 1; i++) {
                if (prices[i] > prices[i + 1]) {
                    isSorted = false;
                    break;
                }
            }
        }

        expect(isSorted).toEqual(true);
    }
}
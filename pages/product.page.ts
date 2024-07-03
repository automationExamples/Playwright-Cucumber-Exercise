import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly sortDropdown: string = 'select[data-test="product-sort-container"]';
    
    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortItems(sortOrder: string) {
        await this.page.selectOption(this.sortDropdown, { label: sortOrder });
    }


 public async validateSortedItems(sortOrder: string) {
        const itemPrices = await this.page.$$eval('.inventory_item_price', items =>
            items.map(item => {
                const priceText = item.textContent;
                if (priceText === null) {
                    throw new Error("Price text content is null");
                }
                return parseFloat(priceText.replace('$', ''));
            })
        );

        const sortedPrices = [...itemPrices].sort((a, b) =>
            sortOrder === 'Price (low to high)' ? a - b : b - a
        );

        if (JSON.stringify(itemPrices) !== JSON.stringify(sortedPrices)) {
            throw new Error(`Items are not sorted correctly by ${sortOrder}`);
        }
    }
}
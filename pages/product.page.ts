import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly productSort: string = '[data-test="product-sort-container"]'
    private readonly priceTexts: string = '.inventory_item_price'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortBy(option: string) {
        await this.page.locator(this.productSort).selectOption({ label: option })
    }

    public async getPrices(): Promise<number[]> {
        const texts = await this.page.locator(this.priceTexts).allTextContents();
        return texts.map(t => parseFloat(t.replace('$','').trim()));
    }

    public async expectSortedByPrice(order: 'low to high'|'high to low') {
        const prices = await this.getPrices();
        const sorted = [...prices].sort((a,b)=> a-b);
        const expected = order === 'low to high' ? sorted : [...sorted].reverse();
        const match = prices.every((v,i)=> v === expected[i]);
        if (!match) {
            throw new Error(`Prices not sorted ${order}. Got: ${prices.join(', ')} Expected: ${expected.join(', ')}`);
        }
    }
}

import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[class="product_sort_container"]'
    private readonly productPrices: string = 'div[class="inventory_item_price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortProducts(sortOption: string) {
        await this.page.locator(this.sortDropdown).selectOption(sortOption);
    }

    public async validateProductSorting(sortType: string) {
        const priceElements = await this.page.locator(this.productPrices).all();
        const prices: number[] = [];
        
        for (const element of priceElements) {
            const priceText = await element.textContent();
            if (priceText) {
                const price = parseFloat(priceText.replace('$', ''));
                prices.push(price);
            }
        }

        let isSorted = true;
        if (sortType === 'lohi') {
            for (let i = 1; i < prices.length; i++) {
                if (prices[i] < prices[i - 1]) {
                    isSorted = false;
                    break;
                }
            }
        } else if (sortType === 'hilo') {
            for (let i = 1; i < prices.length; i++) {
                if (prices[i] > prices[i - 1]) {
                    isSorted = false;
                    break;
                }
            }
        }

        if (!isSorted) {
            throw new Error(`Products are not sorted correctly by ${sortType}. Prices: ${prices.join(', ')}`);
        }
    }
}
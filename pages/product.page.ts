import { Page, expect } from "@playwright/test";

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async selectCart() {
        await this.page.locator('a.shopping_cart_link').click()
    }
    public async selectCheckout() {
        await this.page.locator('button.checkout_button').click()
    }
    public async fillInNameAndPostalCode() {
        await this.page.locator('input[id="first-name"]').fill('John')
        await this.page.locator('input[id="last-name"]').fill('Doe')
        await this.page.locator('input[id="postal-code"]').fill('12345')
    }
    public async selectContinue() {
        await this.page.locator('input[id="continue"]').click()
    }
    public async validateText(text: string) {
        await this.page.locator('h2').textContent().then((value) => {
         expect(value).toBe(text);
        });
    }
    public async selectFinish() {
        await this.page.locator('button.cart_button').click()
    }

    public async sortItemsByPrice(sort: string) {
        if (sort.includes('high_to_low'))
            await this.page.selectOption('select.product_sort_container', 'lohi');
        else
            await this.page.selectOption('select.product_sort_container', 'hilo');
    }
    public async validateSortedItems() {
        const prices = await this.page.$$eval('.inventory_item', items => items.map(item => parseFloat(item.getAttribute('data-price') || '0')));

        // Check if prices are in ascending order
        const isSorted = prices.every((price, index) => index === 0 || price >= prices[index - 1]);
        expect(isSorted).toBe(true);
    }
}
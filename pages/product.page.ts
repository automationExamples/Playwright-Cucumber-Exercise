import { Page, Locator, expect } from '@playwright/test';

export class Product {
    private readonly page:Page;
    private readonly sortDropdown : Locator;
    private readonly priceLocator : Locator;

    constructor(page: Page) { 
this.page = page;
    this.sortDropdown = this.page.locator('.product_sort_container"');
    this.priceLocator = this.page.locator('.inventory_item_price');
    }

    async addToCartByName(name: string) {
        const item = this.page.locator('.inventory_item').filter({ hasText: name });
        await expect(item).toBeVisible();
        await item.locator('button:has-text("Add to cart")').click();
    }

    async openCart() {
        await this.page.click('.shopping_cart_link');
        await this.page.waitForURL('**/cart.html');
    }

    async proceedToCheckout() {
        await this.page.click('#checkout');
        await this.page.waitForURL('**/checkout-step-one.html');
    }

    async fillCheckoutInfo(first: string, last: string, zip: string) {
        await this.page.fill('#first-name', first);
        await this.page.fill('#last-name', last);
        await this.page.fill('#postal-code', zip);
        await this.page.click('#continue');
        await this.page.waitForURL('**/checkout-step-two.html');
    }

    async finish() {
        await this.page.click('#finish');
        await this.page.waitForURL('**/checkout-complete.html');
    }

    async confirmationHeader(): Promise<string> {
        const text = await this.page.locator('.complete-header').textContent();
        return text?.trim() ?? '';
    }

    async selectSortOption(label: string) {
        await this.sortDropdown.waitFor({ state: 'visible', timeout: 60000});
    }

    async getAllPrices(): Promise<number[]> {
        const pricesLoc = this.page.locator('.inventory_item_price');
        await pricesLoc.first().waitFor({ state: 'visible' });
        const texts = await pricesLoc.allInnerTexts();
        return texts.map(t => parseFloat(t.replace('$', '').trim()));
    }
}
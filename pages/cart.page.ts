import { Page } from "@playwright/test"

export class Cart {
    private readonly page: Page
    private readonly cartLink: string = 'a[data-test="shopping-cart-link"]'
    private readonly checkoutButton: string = 'button[id="checkout"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async openCart() {
        await this.page.locator(this.cartLink).click()
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click()
    }
}

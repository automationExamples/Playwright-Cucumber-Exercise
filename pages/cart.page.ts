import { Page } from "@playwright/test"

export class Cart {
    private readonly page: Page
    private readonly checkoutButton: string = 'button[id="checkout"]';
    private readonly continueShopping: string = 'button[id="continue-shopping"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async checkout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async continue() {
        await this.page.locator(this.continueShopping).click();
    }
}
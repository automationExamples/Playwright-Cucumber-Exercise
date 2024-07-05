import { Page } from "@playwright/test"

export class Cartspage {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
}
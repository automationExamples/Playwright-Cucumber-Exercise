import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
	private readonly cartIcon: string = '[data-test="shopping-cart-link"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

	public async openCart() {
		await this.page.locator(this.cartIcon).click()
	}

	
}
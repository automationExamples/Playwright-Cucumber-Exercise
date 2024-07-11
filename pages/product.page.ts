import { expect, Page } from "@playwright/test"

export class Product {

    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartButton: string = '#shopping_cart_container .shopping_cart_link'
    private readonly dropDown: string = '#header_secondary_container .right_component .select_container .product_sort_container'
    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async navigateToCart() {
        await this.page.locator(this.cartButton).click()
    }

}
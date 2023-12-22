import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartButton: string = '//div[@id="shopping_cart_container"]'
    private readonly menuButton: string = '//button[contains(@id,"menu-btn")]'
    private readonly logoutButton: string = '//a[@id="logout_sidebar_link"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async clickOnCartButton(){
        await this.page.locator(this.cartButton).click()
    }

    public async clickOnLogout(){
        await this.page.locator(this.menuButton).click()
        await this.page.locator(this.logoutButton).click()
    }
}

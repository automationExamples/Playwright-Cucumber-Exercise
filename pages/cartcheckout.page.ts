import { Page } from "@playwright/test"

export class Cartcheckout {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly addToCartButton: string = 'button[id="add-to-cart-sauce-labs-bike-light"]'
    private readonly cartIcon: string = 'a[class="shopping_cart_link"]'
    private readonly removeButton: string = 'button[id="remove-sauce-labs-bike-light"]'
    private readonly checkoutButton: string = 'button[id="checkout"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()

    }

    public async addBikeLightToCart() {
        await this.page.locator(this.addToCartButton).click()
    }

    public async cartIconClick() {
        await this.page.locator(this.cartIcon).click()
    }

    public async removeButtonClick() {
        await this.page.locator(this.removeButton).click()
    }

    public async checkoutButtonValidation() {
        const isDisabled = await this.page.locator(this.checkoutButton).isDisabled()
        if (isDisabled) {
            console.log("Checkout button is disabled as expected")
        } else {
            throw new Error("Checkout button is enabled when it should be disabled")
        }
    }

}
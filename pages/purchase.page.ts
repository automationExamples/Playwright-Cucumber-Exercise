import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly shoppingCart: string = 'div[id="shopping_cart_container"]'
    private readonly checkout: string = '[data-test="checkout"]'
    private readonly firstName: string = 'input[data-test="firstName"]'
    private readonly lastName: string = 'input[data-test="lastName"]'
    private readonly postalCode: string = 'input[data-test="postalCode"]'
    private readonly continue: string = 'input[data-test="continue"]'
    private readonly finish: string = 'button[data-test="finish"]'
    private readonly orderMessage: string = '[data-test="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectShoppingCart() {
        await this.page.locator(this.shoppingCart).click()
    }

    public async checkoutCartItems() {
        await this.page.locator(this.checkout).click()
    }

    public async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstName).fill(firstName)
        await this.page.locator(this.lastName).fill(lastName)
        await this.page.locator(this.postalCode).fill(postalCode)
    }

    public async selectContinueButtion() {
        await this.page.locator(this.continue).click()
    }

    public async selectFinishButtion() {
        await this.page.locator(this.finish).click()
    }

    public async validateOrderMessage() {
        return await this.page.locator(this.orderMessage);
    }
}
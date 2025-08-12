import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly checkout: string = 'button[id="checkout"]'
    private readonly cart: string = 'a[data-test="shopping-cart-link"]'
    private readonly firstName: string = 'input[data-test="firstName"]'
    private readonly lastName: string = 'input[data-test="lastName"]'
    private readonly postalCode: string = 'input[data-test="postalCode"]'
    private readonly continue: string = 'input[id="continue"]'
    private readonly finish: string = 'button[id="finish"]'
    private readonly orderPlaced: string = 'h2[data-test="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async clickCartLink() {
        await this.page.locator(this.cart).click()
    }

    public async clickCheckout() {
        await this.page.locator(this.checkout).click()
    }

    public async clickContinue() {
        await this.page.locator(this.continue).click()
    }

    public async clickFinish() {
        await this.page.locator(this.finish).click()
    }

    public async setFirstName(firstName: string) {
        await this.page.locator(this.firstName).fill(firstName)
    }

    public async setLastName(lastName: string) {
        await this.page.locator(this.lastName).fill(lastName)
    }

    public async setPostalCode(postalCode: string) {
        await this.page.locator(this.postalCode).fill(postalCode)
    }

    public async validateOrderMessage(expected: string) {
        const actual = await this.page.locator(this.orderPlaced).innerText();
        if (actual !== expected) {
            throw new Error(`Expected title to be ${expected} but found ${actual}`);
        }
    }
}
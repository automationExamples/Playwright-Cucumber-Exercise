import { Page, expect } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cart: string = 'div[id="shopping_cart_container"]'
    private readonly checkout: string = 'Checkout'
    private readonly firstName: string = 'input[id="first-name"]'
    private readonly lastName: string = 'input[id="last-name"]'
    private readonly zipCode: string = 'input[id="postal-code"]'
    private readonly continue: string = 'Continue'
    private readonly finish: string = 'Finish'
    private readonly thankYouMsg: string = 'h2.complete-header'


    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.locator(this.cart).click()
    }

    public async clickCheckout() {
        await this.page.getByText(this.checkout).click()
    }

    public async fillCheckoutInformation(firstName: string, lastName: string, zipCode: string) {
        await this.page.locator(this.firstName).fill(firstName)
        await this.page.locator(this.lastName).fill(lastName)
        await this.page.locator(this.zipCode).fill(zipCode)

    }

    public async clickOnContinue() {
        await this.page.getByText(this.continue).click()
    }

    public async clickOnFinish() {
        await this.page.getByText(this.finish).click()
    }

    public async verifyThankYouMsg(expectedMsg: string) {
        await expect(this.page.locator(this.thankYouMsg)).toHaveText(expectedMsg)
    }
}
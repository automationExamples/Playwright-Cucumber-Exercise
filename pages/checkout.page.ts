import { Page, expect } from "@playwright/test"

export class Checkout {
    private readonly page: Page

    private readonly cartLink: string = '.shopping_cart_link'
    private readonly checkoutButton: string = '[data-test="checkout"]'
    private readonly firstNameField: string = '[data-test="firstName"]'
    private readonly lastNameField: string = '[data-test="lastName"]'
    private readonly postalCodeField: string = '[data-test="postalCode"]'
    private readonly continueButton: string = '[data-test="continue"]'
    private readonly finishButton: string = '[data-test="finish"]'
    private readonly completeHeader: string = '[data-test="complete-header"]'

    constructor(page: Page) {
        this.page = page
    }

    public async openCart() {
        await this.page.locator(this.cartLink).click()
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async enterCheckoutInformation() {
        await this.page.locator(this.firstNameField).fill('Sharan')
        await this.page.locator(this.lastNameField).fill('Suresh')
        await this.page.locator(this.postalCodeField).fill('28202')
    }

    public async continueCheckout() {
        await this.page.locator(this.continueButton).click()
    }

    public async finishPurchase() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateConfirmation(expectedMessage: string) {
        await expect(
            this.page.locator(this.completeHeader)
        ).toHaveText(expectedMessage)
    }
}
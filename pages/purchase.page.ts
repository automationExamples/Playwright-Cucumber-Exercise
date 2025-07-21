import { expect, Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cart: string = 'a[data-test="shopping-cart-link"]'
    private readonly firstName: string = 'input[data-test="firstName"]'
    private readonly lastName: string = 'input[data-test="lastName"]'
    private readonly postalCode: string = 'input[data-test="postalCode"]'
    private readonly successMessage: string = 'h2[data-test="complete-header"]'
    private readonly continueButton: string = 'input[data-test="continue"]'
    private readonly finishButton: string = 'button[data-test="finish"]'
    private readonly checkoutSubmitButton: string = 'button[data-test="checkout"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async goToShoppingCart() {
        await this.page.locator(this.cart).click()
    }

    public async clickSubmitButton() {
        await this.page.locator(this.checkoutSubmitButton).click()
    }

    public async populateBillingDetails() {
        await this.page.locator(this.firstName).fill('Naresh kumar');
        await this.page.locator(this.lastName).fill('Munirathnam');
        await this.page.locator(this.postalCode).fill('95132');
    }

    public async submitContinueButton() {
        await this.page.locator(this.continueButton).click()
    }

    public async confirmOrder() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateSuccessMessage(message: string) {
        const successMsg = this.page.locator(this.successMessage)
        await expect(successMsg).toContainText(message)
    }
}
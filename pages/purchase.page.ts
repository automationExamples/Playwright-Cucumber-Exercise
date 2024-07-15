import { expect, Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cart: string = 'a[data-test="shopping-cart-link"]'
    private readonly checkoutButton: string = 'button[data-test="checkout"]'
    private readonly firstName: string = 'input[data-test="firstName"]'
    private readonly lastName: string = 'input[data-test="lastName"]'
    private readonly postalCode: string = 'input[data-test="postalCode"]'
    private readonly continueButton: string = 'input[data-test="continue"]'
    private readonly finishButton: string = 'button[data-test="finish"]'
    private readonly successMessage: string = 'h2[data-test="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateToCart() {
        await this.page.locator(this.cart).click()
    }

    public async proceedToCheckout() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async fillBillInfo() {
        await this.page.locator(this.firstName).fill('Akshay');
        await this.page.locator(this.lastName).fill('Kanthed');
        await this.page.locator(this.postalCode).fill('458330');
    }

    public async clickOnContinue() {
        await this.page.locator(this.continueButton).click()
    }

    public async completeCheckout() {
        await this.page.locator(this.finishButton).click()
    }

    public async successfulMessage(message: string) {
        const error = await this.page.locator(this.successMessage)
        await expect(error).toContainText(message)
    }
}

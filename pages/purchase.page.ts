import { Page, expect } from "@playwright/test"

export class Purchase {
    // Define selectors
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly removeFromCart: string = '[data-test="remove-sauce-labs-backpack"]'
    private readonly cart: string = '[data-test="shopping-cart-link"]'
    private readonly checkout: string = '[data-test="checkout"]'
    private readonly firstNameField: string = '[data-test="firstName"]'
    private readonly lastNameField: string = '[data-test="lastName"]'
    private readonly postalCodeField: string = '[data-test="postalCode"]'
    private readonly continue: string = '[data-test="continue"]'
    private readonly finishButton: string = '[data-test="finish"]'
    private readonly completeHeader: string = '[data-test="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    // Method to add backpack to cart
    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
        // Validate if the button has changed to remove
        await expect(this.page.locator(this.removeFromCart)).toBeVisible();
        await expect(this.page.locator(this.removeFromCart)).toHaveText('Remove');
    }

    // Method to validate badge number on cart
    public async validateBadgeNumber() {
        const badgeNumberLocator = this.page.locator('[data-test="shopping-cart-badge"]');
        await expect(badgeNumberLocator).toBeVisible();
        await expect(badgeNumberLocator).toHaveText('1');
    }

    // Method to click on the cart
    public async clickCart() {
        await this.page.locator(this.cart).click()
    }

    // Method to click on the checkout
    public async clickCheckout() {
        await this.page.locator(this.checkout).click()
    }

    // Method to fill in the details
    public async enterDetails(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.postalCodeField).fill(postalCode)
    }

    // Method to click on the continue
    public async clickContinue() {
        await this.page.locator(this.continue).click()
    }

    // Method to click on the finish
    public async clickFinish() {
        await this.page.locator(this.finishButton).click()
    }

    // Method to validate the message
    public async validateCompleteHeader(expectedHeader: string) {
        const completeHeaderLocator = this.page.locator(this.completeHeader);
        await expect(completeHeaderLocator).toBeVisible();
        await expect(completeHeaderLocator).toHaveText(expectedHeader);
    }
}
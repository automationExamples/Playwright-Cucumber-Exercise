import { Page } from '@playwright/test';

// Defines a Purchase class to encapsulate purchase-related actions on the page
export class Purchase {
    // Holds a reference to the Playwright Page object
    private readonly page: Page;
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    
    // Initializes the Purchase class with the given Page instance
    constructor(page: Page) {
        this.page = page;
    }

    async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    // Clicks on the shopping cart link
    async selectCart() {
        await this.page.locator('.shopping_cart_link').click();
    }

    // Clicks on the checkout button
    async selectCheckout() {
        await this.page.locator('[data-test="checkout"]').click();
    }

    // Fills out the checkout form with the provided first name, last name, and zip code
    async fillCheckoutForm(firstName: string, lastName: string, zip: string) {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(zip);
    }

    // Clicks the continue button to proceed with the checkout
    async selectContinue() {
        await this.page.locator('[data-test="continue"]').click();
    }

    // Clicks the finish button to complete the purchase
    async selectFinish() {
        await this.page.locator('[data-test="finish"]').click();
    }

    // Validates that the order confirmation text matches the expected value
    async validateOrderText(expectedText: string) {
        const confirmation = this.page.locator('.complete-header');
        await confirmation.waitFor({ state: 'visible' }); // Waits for the confirmation element to be visible
        const actualText = await confirmation.textContent(); // Gets the text content of the confirmation element
        if (actualText?.trim() !== expectedText) {
            throw new Error(`Expected text "${expectedText}" but found "${actualText?.trim()}"`);
        }
    }
}
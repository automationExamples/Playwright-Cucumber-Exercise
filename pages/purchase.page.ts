import { Page } from "@playwright/test";

export class Purchase {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackpackToCart() {
        await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
    }

    public async proceedToCheckout() {
        await this.page.locator('.shopping_cart_link').click();
        await this.page.locator('#checkout').click();
    }

    public async fillCheckoutInformation(firstName: string, lastName: string, zipCode: string) {
        await this.page.locator('#first-name').fill(firstName);
        await this.page.locator('#last-name').fill(lastName);
        await this.page.locator('#postal-code').fill(zipCode);
        await this.page.locator('#continue').click();
    }

    public async continueToNextStep() {
        await this.page.locator('#continue').click();
    }

    public async finishPurchase() {
        await this.page.locator('#finish').click();
    }

    public async validateOrderConfirmation(expectedText: string) {
        const text = await this.page.locator('.complete-header').textContent();
        if (text?.trim() !== expectedText) {
            throw new Error(`Expected text "${expectedText}" but found "${text}"`);
        }
    }
}

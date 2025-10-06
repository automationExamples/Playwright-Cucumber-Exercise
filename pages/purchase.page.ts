import { Page, expect } from "@playwright/test";

export class Purchase {
    private readonly page: Page;

    private readonly cartButton = '.shopping_cart_link';
    private readonly checkoutButton = '[data-test="checkout"]';
    private readonly firstNameField = '[data-test="firstName"]';
    private readonly lastNameField = '[data-test="lastName"]';
    private readonly postalCodeField = '[data-test="postalCode"]';
    private readonly continueButton = '[data-test="continue"]';
    private readonly finishButton = '[data-test="finish"]';
    private readonly successMessage = '.complete-header';

    constructor(page: Page) {
        this.page = page;
    }

    public async goToCart() {
        await this.page.locator(this.cartButton).click();
    }

    public async checkout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(postalCode);
    }

    public async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }

    public async finishPurchase() {
        await this.page.locator(this.finishButton).click();
    }

    public async validateSuccessMessage(expectedMessage: string) {
        const msgLocator = this.page.locator(this.successMessage);
        await expect(msgLocator).toBeVisible();
        await expect(msgLocator).toHaveText(expectedMessage);
    }
}

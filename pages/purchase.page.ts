import { Page } from "@playwright/test";

export class Purchase {
    private readonly page: Page;

    private readonly backpackAddButton = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly cartButton = 'a[class="shopping_cart_link"]';
    private readonly checkoutButton = 'button[id="checkout"]';
    private readonly firstNameField = 'input[id="first-name"]';
    private readonly lastNameField = 'input[id="last-name"]';
    private readonly postalCodeField = 'input[id="postal-code"]';
    private readonly continueButton = 'input[id="continue"]';
    private readonly finishButton = 'button[id="finish"]';
    private readonly successMessage = '.complete-header';

    constructor(page: Page) {
        this.page = page;
    }

    async addBackpackToCart() {
        await this.page.locator(this.backpackAddButton).click();
    }

    async goToCart() {
        await this.page.locator(this.cartButton).click();
    }

    async checkoutButtonClick() {
        await this.page.locator(this.checkoutButton).click();
    }

    async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(postalCode);
    }

    async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }

    async finishPurchase() {
        await this.page.locator(this.finishButton).click();
    }

    async validateSuccessMessage(expectedMessage: string) {
        const actualMessage = await this.page.locator(this.successMessage).textContent();
        if (actualMessage?.trim() !== expectedMessage) {
            throw new Error(`Expected message to be "${expectedMessage}" but found "${actualMessage}"`);
        }
    }
}

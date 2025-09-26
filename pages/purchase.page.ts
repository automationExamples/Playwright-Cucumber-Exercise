import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cartIcon: string = 'a[class="shopping_cart_link"]'
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly firstNameField: string = 'input[id="first-name"]'
    private readonly lastNameField: string = 'input[id="last-name"]'
    private readonly postalCodeField: string = 'input[id="postal-code"]'
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly thankYouMessage: string = 'h2[class="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.locator(this.cartIcon).click();
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(postalCode);
    }

    public async selectContinue() {
        await this.page.locator(this.continueButton).click();
    }

    public async selectFinish() {
        await this.page.locator(this.finishButton).click();
    }

    public async validateThankYouMessage(expectedMessage: string) {
        const messageText = await this.page.locator(this.thankYouMessage).textContent();
        if (messageText !== expectedMessage) {
            throw new Error(`Expected message to be "${expectedMessage}" but found "${messageText}"`);
        }
    }
}
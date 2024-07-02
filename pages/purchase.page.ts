import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartIcon: string = 'a[data-test="shopping-cart-link"]';
    private readonly checkoutButton: string = 'button[data-test="checkout"]';
    private readonly firstNameField: string = 'input[id="first-name"]';
    private readonly lastNameField: string = 'input[id="last-name"]';
    private readonly zipCodeField: string = 'input[id="postal-code"]';
    private readonly continueButton: string = 'input[id="continue"]';
    private readonly finishButton: string = 'button[id="finish"]';
    private readonly completeHeader: string = 'h2[data-test="complete-header"]';

    private readonly firstName: string = 'John';
    private readonly lastName: string = 'Doe';
    private readonly zipCode: string = '00000';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectCartIcon() {
        await this.page.locator(this.cartIcon).click();
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillInShipping() {
        await this.page.locator(this.firstNameField).fill(this.firstName);
        await this.page.locator(this.lastNameField).fill(this.lastName);
        await this.page.locator(this.zipCodeField).fill(this.zipCode);
    }

    public async confirmPurchase() {
        await this.page.locator(this.continueButton).click();
        await this.page.locator(this.finishButton).click();
    }

    public async validatePurchaseMessage(expectedMessage: string) {
        const completeHeaderText = await this.page.locator(this.completeHeader).innerText();
        if (completeHeaderText !== expectedMessage) {
            throw new Error(`Expected title to be ${expectedMessage} but found ${completeHeaderText}`);
        }
    }
}
import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cartIcon: string = '.shopping_cart_link'
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly firstNameField: string = 'input[id="first-name"]'
    private readonly lastNameField: string = 'input[id="last-name"]'
    private readonly zipCodeField: string = 'input[id="postal-code"]'
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly successMessage: string = '.complete-header'

    constructor(page: Page) {
        this.page = page;
    }

    public async goToCart() {
        await this.page.click(this.cartIcon);
    }

    public async proceedToCheckout() {
        await this.page.click(this.checkoutButton);
    }

    public async fillCheckoutInfo(firstName: string, lastName: string, zipCode: string) {
        await this.page.fill(this.firstNameField, firstName);
        await this.page.fill(this.lastNameField, lastName);
        await this.page.fill(this.zipCodeField, zipCode);
    }

    public async continueToOverview() {
        await this.page.click(this.continueButton);
    }

    public async finishOrder() {
        await this.page.click(this.finishButton);
    }

    public async validateSuccessMessage(expectedMessage: string) {
        await this.page.waitForSelector(this.successMessage);
        const actualMessage = await this.page.textContent(this.successMessage);
        if (actualMessage?.trim() !== expectedMessage) {
            throw new Error(`Expected success message: "${expectedMessage}" but found: "${actualMessage?.trim()}"`);
        }
    }
}
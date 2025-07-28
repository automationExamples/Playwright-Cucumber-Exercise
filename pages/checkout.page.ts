import { Page } from "@playwright/test"

export class Checkout {
    private readonly page: Page
    private readonly checkoutButton: string = '[data-test="checkout"]'
    private readonly firstNameField: string = '[data-test="firstName"]'
    private readonly lastNameField: string = '[data-test="lastName"]'
    private readonly postalCodeField: string = '[data-test="postalCode"]'
    private readonly continueButton: string = '[data-test="continue"]'
    private readonly finishButton: string = 'button[data-test="finish"]'
    private readonly completeHeader: string = '[data-test="complete-header"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async fillInCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill(this.firstNameField, firstName)
        await this.page.fill(this.lastNameField, lastName)
        await this.page.fill(this.postalCodeField, postalCode)
        await this.page.click(this.continueButton)
    }

    public async finishCheckout() {
        await this.page.click(this.finishButton)
    }

    public async validateText(expectedText: string) {
        const actualText = await this.page.textContent(this.completeHeader);
        if (actualText !== expectedText) {
            throw new Error(`Expected text to be "${expectedText}" but found "${actualText}"`);
        }
    }
}
import { Page, expect } from '@playwright/test';

export class Purchase {

    private readonly page: Page;

    private readonly cartIcon: string = '.shopping_cart_link';

    private readonly checkoutButton: string = '[data-test="checkout"]';

    private readonly firstNameField: string = '[data-test="firstName"]';

    private readonly lastNameField: string = '[data-test="lastName"]';

    private readonly postalCodeField: string = '[data-test="postalCode"]';

    private readonly continueButton: string = '[data-test="continue"]';

    private readonly finishButton: string =  '[data-test="finish"]';

    private readonly confirmationMessage: string = '[data-test="complete-header"]';

    private readonly checkoutError: string = '[data-test="error"]';

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.locator(this.cartIcon).click();
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.page
            .locator(this.firstNameField)
            .fill(firstName);

        await this.page
            .locator(this.lastNameField)
            .fill(lastName);

        await this.page
            .locator(this.postalCodeField)
            .fill(postalCode);
    }

    public async selectContinue() {
        await this.page
            .locator(this.continueButton)
            .click();
    }

    public async selectFinish() {
        await this.page
            .locator(this.finishButton)
            .click();
    }

    public async validatePurchaseConfirmation(
        expectedMessage: string
    ) {
        await expect(
            this.page.locator(this.confirmationMessage)
        ).toHaveText(expectedMessage);
    }

    public async validateCheckoutError(
        expectedMessage: string
    ) {
        await expect(
            this.page.locator(this.checkoutError)
        ).toHaveText(expectedMessage);
    }
}
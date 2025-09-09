import { Page } from "@playwright/test"

// Purchase class to handle purchase-related actions on the page
export class PurchasePage {
    private readonly page: Page
    private readonly pageHeaderText: string = '[data-test="title"]'
    private readonly checkOutButton: string = '[data-test="checkout"]'
    private readonly firstNameField: string = '[data-test="firstName"]'
    private readonly lastNameField: string = '[data-test="lastName"]'
    private readonly postalCodeField: string = '[data-test="postalCode"]'
    private readonly continueButton: string = '[data-test="continue"]'
    private readonly finishButton: string = '[data-test="finish"]'
    private readonly orderMessage: string = '[data-test="complete-header"]'
    private readonly shoppingCartIcon: string = '[data-test="shopping-cart-link"]' // ✅ NEW

    constructor(page: Page) {
        this.page = page;
    }

    public async clickShoppingCart() { // ✅ NEW
        await this.page.locator(this.shoppingCartIcon).click();
    }

    public async validatePageHeaderText(expectedHeader: string) {
        let pageHeader = await this.page.locator(this.pageHeaderText).textContent()
        if (pageHeader !== expectedHeader) {
          throw new Error(`Expected title to be ${expectedHeader} but found ${pageHeader}`);
        }
    }

    public async clickCheckoutButton() {
        await this.page.locator(this.checkOutButton).click();
    }

    public async fillCheckoutYourInfoForm(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(postalCode);
    }

    public async selectContinueButton() {
        await this.page.locator(this.continueButton).click();
    }

    public async clickFinishButton() {
        await this.page.locator(this.finishButton).click();
    }

    public async validateOrderMessage(expectedMessage: string) {
        const actualText = await this.page.locator(this.orderMessage).textContent();
        if (actualText?.trim() !== expectedMessage) {
            throw new Error(`Expected order message "${expectedMessage}" but found "${actualText}"`);
        }
    }
}
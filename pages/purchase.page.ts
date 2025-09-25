import { Page } from "playwright"
import { testData } from "../data/test-data"

export class Purchase {
    private readonly page: Page
    private readonly cartIcon: string = '.shopping_cart_link'
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly firstNameField: string = 'input[id="first-name"]'
    private readonly lastNameField: string = 'input[id="last-name"]'
    private readonly postalCodeField: string = 'input[id="postal-code"]'
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly successMessage: string = 'h2[class="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.locator(this.cartIcon).click();
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillCheckoutForm(firstName: string = testData.customerInfo.firstName, lastName: string = testData.customerInfo.lastName, postalCode: string = testData.customerInfo.postalCode) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(postalCode);
    }

    public async fillCheckoutFormWithDefaults() {
        await this.fillCheckoutForm();
    }

    public async selectContinue() {
        await this.page.locator(this.continueButton).click();
    }

    public async selectFinish() {
        await this.page.locator(this.finishButton).click();
    }

    public async validateSuccessMessage(expectedMessage: string = testData.successMessages.orderComplete) {
        const actualMessage = await this.page.locator(this.successMessage).textContent();
        if (actualMessage?.trim() !== expectedMessage.trim()) {
            throw new Error(`Expected "${expectedMessage}" but found "${actualMessage?.trim()}"`);
        }
    }
}
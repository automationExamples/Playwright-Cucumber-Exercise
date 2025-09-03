import { Page, expect } from "@playwright/test"
export class Purchase {
    private readonly page: Page
    private readonly cartButton: string = '[id="shopping_cart_container"]'
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly firstNameField: string = 'input[id="first-name"]'
    private readonly lastNameField: string = 'input[id="last-name"]'
    private readonly zipCodeField: string = 'input[id="postal-code"]'
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.locator(this.cartButton).click()
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async fillInFirstName(firstName: string) {
        await this.page.locator(this.firstNameField).fill(firstName)
    }

    public async fillInLastName(lastName: string) {
        await this.page.locator(this.lastNameField).fill(lastName)
    }

    public async fillInZipCode(zipCode: string) {
        await this.page.locator(this.zipCodeField).fill(zipCode)
    }

    public async selectContinue() {
        await this.page.locator(this.continueButton).click()
    }

    public async selectFinish() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateOrderMessage(expectedOrderMessage: string) {
        await expect(this.page.getByText(expectedOrderMessage)).toBeVisible();
    }    
}
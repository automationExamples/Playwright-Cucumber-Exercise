import { expect, Page } from "@playwright/test"

export class Checkout {
    private readonly page: Page
    private readonly firstNameField: string = 'input[id="first-name"]'
    private readonly lastNameField: string = 'input[id="last-name"]'
    private readonly postalCodeField: string = 'input[id="postal-code"]'
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly completeHeader: string = 'h2[data-test="complete-header"]'
    private readonly errorMessage: string = 'h3[data-test="error"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async fillInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.postalCodeField).fill(postalCode)
    }

    public async selectContinue() {
        await this.page.locator(this.continueButton).click()
    }

    public async selectFinish() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateCompleteHeader(expectedText: string) {
        await expect(this.page.locator(this.completeHeader)).toHaveText(expectedText)
    }

    public async validateErrorMessage(expectedMessage: string) {
        await expect(this.page.locator(this.errorMessage)).toHaveText(expectedMessage)
    }
}

import { Page } from "playwright";
import { click, fillText, getText } from "../webUtils";

export class checkout {

    private readonly page: Page
    private readonly firstName: string = 'input[id="first-name"]'
    private readonly lastName: string = 'input[id="last-name"]'
    private readonly postalCode: string = 'input[id="postal-code"]'
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly cancelButton: string = 'button[id="cancel"]'
    private readonly backToHomeButton: string = 'button[id=2back-to-products"]'
    private readonly completeOrderText: string = 'h2[data-test="complete-header"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async enterFirstName(firstName: string) {
        await fillText(this.page, this.firstName, firstName)
    }

    public async enterLastName(lastName: string) {
        await fillText(this.page, this.lastName, lastName)
    }

    public async enterPostalCode(postalCode: string) {
        await fillText(this.page, this.postalCode, postalCode)
    }

    public async fillOutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.enterFirstName(firstName)
        await this.enterLastName(lastName)
        await this.enterPostalCode(postalCode)
    }

    public async clickContinueButton() {
        await click(this.page, this.continueButton)
    }

    public async clickFinishButton() {
        await click(this.page, this.finishButton)
    }

    public async clickCancelButton() {
        await click(this.page, this.cancelButton)
    }

    public async clickBackToHomeButton() {
        await click(this.page, this.backToHomeButton)
    }

    public async getCompleteOrderText(): Promise<string> {
        return getText(this.page, this.completeOrderText)
    }

}
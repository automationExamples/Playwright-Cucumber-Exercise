import { Page } from "@playwright/test"

export class Checkout {
    private readonly page: Page
    private readonly firstNameInput: string = 'input[id="first-name"]';
    private readonly lastNameInput: string = 'input[id="last-name"]';
    private readonly postalCodeInput: string = 'input[id="postal-code"]';
    private readonly continueButton: string = 'input[id="continue"]';
    private readonly finishButton: string = 'button[id="finish"]';
    private readonly confirmationText: string = '.complete-header';

    
    constructor(page: Page) {
        this.page = page;
    }

    public async enterUserDetails(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameInput).fill(firstName);
        await this.page.locator(this.lastNameInput).fill(lastName);
        await this.page.locator(this.postalCodeInput).fill(postalCode);
    }

    public async continueCheckout() {
        await this.page.locator(this.continueButton).click();
    }

    public async finishCheckout() {
        await this.page.locator(this.finishButton).click();
    }

    public async getConfirmationText(): Promise<string> {
        return this.page.locator(this.confirmationText).innerText();
    }
}
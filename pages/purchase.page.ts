import { Page, expect } from "@playwright/test";


export class Purchase {
    private readonly page: Page;
    private readonly cartButton: string = '//div[@id="shopping_cart_container"]';
    private readonly checkoutButton: string = 'button[id="checkout"]';
    private readonly firstNameField: string = 'input[id="first-name"]';
    private readonly lastNameField: string = 'input[id="last-name"]';
    private readonly zipCodeField: string = 'input[id="postal-code"]';
    private readonly continueButton: string = 'input[value="CONTINUE"]';
    private readonly finishButton: string = 'button[id="finish"]';
    private readonly successMessage: string = '.complete-header';

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.locator(this.cartButton).click();
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillShippingDetails(firstName: string, lastName: string, zipCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.zipCodeField).fill(zipCode);
    }

    public async selectContinue() {
        await this.page.locator(this.continueButton).click();
    }

    public async selectFinish() {
        await this.page.locator(this.finishButton).click();
    }

    public async validateSuccessMessage(expectedMessage: string) {
        const successText = await this.page.locator(this.successMessage).textContent();
        expect(successText.trim()).toContain(expectedMessage);
    }
}

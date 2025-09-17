import { Page, expect } from "@playwright/test";

export class CheckoutPage {
    private readonly page: Page;
    private readonly cartIcon: string = "#shopping_cart_container";
    private readonly checkoutButton: string = "#checkout";
    private readonly firstNameInput: string = "#first-name";
    private readonly lastNameInput: string = "#last-name";
    private readonly postalCodeInput: string = "#postal-code";
    private readonly continueButton: string = "#continue";
    private readonly finishButton: string = "#finish";
    private readonly confirmationMessage: string = ".complete-header";

    constructor(page: Page) {
        this.page = page;
    }

    public async openCart() {
        await this.page.locator(this.cartIcon).click();
    }

    public async clickCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.page.locator(this.firstNameInput).fill(firstName);
        await this.page.locator(this.lastNameInput).fill(lastName);
        await this.page.locator(this.postalCodeInput).fill(postalCode);
    }

    async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }

    async clickFinish() {
        await this.page.locator(this.finishButton).click();
    }

    async getConfirmationMessage(): Promise<string> {
        return ((await this.page.locator(this.confirmationMessage).textContent())?.trim() || "");
    }

    async expectConfirmationMessage(expected: string) {
        await expect(this.page.locator(this.confirmationMessage)).toHaveText(expected);
    }

}

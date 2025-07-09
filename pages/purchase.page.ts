import { Page } from "@playwright/test";

export class Purchase {
    private readonly page: Page;
    private readonly cartButton = 'a.shopping_cart_link';
    private readonly checkoutButton = 'button#checkout';
    private readonly firstNameInput = 'input#first-name';
    private readonly lastNameInput = 'input#last-name';
    private readonly postalCodeInput = 'input#postal-code';
    private readonly continueButton = 'input#continue';
    private readonly finishButton = 'button#finish';
    private readonly thankYouHeader = 'h2.complete-header';

    constructor(page: Page) {
        this.page = page;
    }

    async goToCart() {
        await this.page.locator(this.cartButton).click();
    }

    async clickCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    async fillCheckoutInfo(first: string, last: string, zip: string) {
        await this.page.locator(this.firstNameInput).fill(first);
        await this.page.locator(this.lastNameInput).fill(last);
        await this.page.locator(this.postalCodeInput).fill(zip);
    }

    async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }

    async clickFinish() {
        await this.page.locator(this.finishButton).click();
    }

    async isThankYouVisible() {
        return this.page.locator(this.thankYouHeader).isVisible();
    }
}

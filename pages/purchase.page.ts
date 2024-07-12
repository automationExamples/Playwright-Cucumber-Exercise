import {Page} from "@playwright/test"

export class Cart {
    private readonly page: Page;
    private readonly cartSelector: string = '.shopping_cart_link';

    constructor(page: Page) {
        this.page = page;
    }

    async selectCart() {
        await this.page.click(this.cartSelector);
    }
}


export class Checkout {
    private readonly page: Page;
    private readonly checkoutSelector: string = '#checkout';
    private readonly continueSelector: string = '#continue';
    private readonly finishSelector: string = '#finish';
    private readonly confirmationTextSelector: string = 'h2[data-test="complete-header"]';

    constructor(page: Page) {
        this.page = page;
    }

    async selectCheckout() {
        await this.page.click(this.checkoutSelector);
    }

    async fillInDetails(firstName: string, lastName: string, zipCode: string) {
        await this.page.fill('input[name="firstName"]', firstName);
        await this.page.fill('input[name="lastName"]', lastName);
        await this.page.fill('input[name="postalCode"]', zipCode);
    }

    async selectContinue() {
        await this.page.click(this.continueSelector);
    }

    async selectFinish() {
        await this.page.click(this.finishSelector);
    }

    async getConfirmationText() {
        return await this.page.textContent(this.confirmationTextSelector);
    }
}
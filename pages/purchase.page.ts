import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cartLink = 'a.shopping_cart_link'
    private readonly checkoutButton = 'button[id="checkout"]'
    private readonly firstName = 'input[id="first-name"]'
    private readonly lastName = 'input[id="last-name"]'
    private readonly postalCode = 'input[id="postal-code"]'
    private readonly continueButton = 'input[id="continue"]'
    private readonly finishButton = 'button[id="finish"]'
    private readonly confirmationHeader = '.complete-header'

    constructor(page: Page) {
        this.page = page;
    }

    public async openCart() {
        await this.page.locator(this.cartLink).click();
    }

    public async startCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
        await this.page.locator(this.postalCode).fill(postalCode);
    }

    public async continue() {
        await this.page.locator(this.continueButton).click();
    }

    public async finish() {
        await this.page.locator(this.finishButton).click();
    }

    public async validateOrderSuccess(expectedText: string) {
        const txt = (await this.page.locator(this.confirmationHeader).textContent()) || '';
        if (!txt.trim().toLowerCase().includes(expectedText.trim().toLowerCase())) {
            throw new Error(`Expected order confirmation to include "${expectedText}" but found "${txt.trim()}"`);
        }
    }
}
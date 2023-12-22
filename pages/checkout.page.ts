import { Page, expect } from "@playwright/test"

export class Checkout {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartBtn: string = '[id="shopping_cart_container"]';
    private readonly checkoutBtn: string = 'checkout[data-test="checkout"]';
    private readonly firstNameTxt: string = 'input[data-test="firstName"]';
    private readonly lastNameTxt: string = 'input[data-test="lastName"]';
    private readonly postalCodeTxt: string = 'input[data-test="postalCode"]';
    private readonly doneCheckoutInfoBtn: string = 'input[data-test="continue"]';
    private readonly confirmCheckoutBtn: string = 'input[data-test="finish"]';
    private readonly backHomeBtn: string = 'input[data-test="back-to-products"]';

    constructor(page: Page) {
        this.page = page;
    }
    public async enterCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameTxt).fill(firstName);
        await this.page.locator(this.lastNameTxt).fill(lastName);
        await this.page.locator(this.postalCodeTxt).fill(postalCode);
        await this.page.locator(this.doneCheckoutInfoBtn).click();
    }
    public async checkout(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.confirmCheckoutBtn).click();
        this.enterCheckoutInfo(firstName, lastName, postalCode);
        await this.page.locator(this.confirmCheckoutBtn).click();
    }
    public async validateConfirmation(expected: string) {
        await expect(this.page).toHaveURL(/.*\/checkout-complete.html/);
        await expect(this.page.locator('h2.complete-header')).toContainText(expected);
        // await expect(this.page.locator('div.complete-text')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}
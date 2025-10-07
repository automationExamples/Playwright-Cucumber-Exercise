
import { Page } from '@playwright/test';

export class Purchase {
    private readonly page: Page;
    private readonly addBackpackButton: string = '[data-test="add-to-cart-sauce-labs-backpack"]';
    private readonly cartIcon: string = '.shopping_cart_link';
    private readonly checkoutButton: string = '[data-test="checkout"]';
    private readonly firstNameField: string = '[data-test="firstName"]';
    private readonly lastNameField: string = '[data-test="lastName"]';
    private readonly zipField: string = '[data-test="postalCode"]';
    private readonly continueButton: string = '[data-test="continue"]';
    private readonly finishButton: string = '[data-test="finish"]';
    private readonly successHeader: string = '.complete-header';
    
    constructor(page: Page) {
        this.page = page;
    }
    
    public async addBackpackToCart() {
        await this.page.locator(this.addBackpackButton).click();
    }
    
    public async clickCart() {
        await this.page.locator(this.cartIcon).click();
    }
    
    public async clickCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }
    
    public async fillUserInfo() {
        await this.page.locator(this.firstNameField).fill('QA');
        await this.page.locator(this.lastNameField).fill('Tester');
        await this.page.locator(this.zipField).fill('28227');
    }
    
    public async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }
    
    public async clickFinish() {
        await this.page.locator(this.finishButton).click();
    }
    
    public async validateThankYouMessage(expectedMessage: string) {
        const actualMessage = await this.page.locator(this.successHeader).textContent();
        if (actualMessage?.trim() !== expectedMessage) {
            throw new Error(`Expected message to be "${expectedMessage}" but found "${actualMessage}"`);
        }
    }
}
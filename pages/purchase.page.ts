import { Page, expect } from "@playwright/test"


export class Checkout {
    private readonly page: Page;
    private readonly proceedToCheckoutButton: string = 'button[id="checkout"]';
    private readonly firstNameInputField: string = 'input[id="first-name"]';
    private readonly lastNameInputField: string = 'input[id="last-name"]';
    private readonly zipCodeInputField: string = 'input[id="postal-code"]';
    private readonly continueCheckoutButton: string = 'input[id="continue"]';
    private readonly finishOrderButton: string = 'button[id="finish"]';
    private readonly orderSuccessMessage: string = 'h2[class="complete-header"]';

    constructor(page: Page) {
        this.page = page;
    }

    
    public async proceedToCheckout() {
        try {
            // Assert checkout button is visible before clicking
            await expect(this.page.locator(this.proceedToCheckoutButton)).toBeVisible();
            await this.page.locator(this.proceedToCheckoutButton).click();
        } catch (error) {
            throw new Error(`Failed to proceed to checkout: ${error}`);
        }
    }

 
    public async fillCheckoutInformation() {
        try {
            // Assert first name field is visible before filling
            await expect(this.page.locator(this.firstNameInputField)).toBeVisible();
            await this.page.locator(this.firstNameInputField).fill('John');
            
            // Assert last name field is visible before filling
            await expect(this.page.locator(this.lastNameInputField)).toBeVisible();
            await this.page.locator(this.lastNameInputField).fill('Doe');
            
            // Assert zip code field is visible before filling
            await expect(this.page.locator(this.zipCodeInputField)).toBeVisible();
            await this.page.locator(this.zipCodeInputField).fill('12345');
        } catch (error) {
            throw new Error(`Failed to fill checkout information: ${error}`);
        }
    }

   
    public async continueCheckout() {
        try {
            // Assert continue button is visible before clicking
            await expect(this.page.locator(this.continueCheckoutButton)).toBeVisible();
            await this.page.locator(this.continueCheckoutButton).click();
        } catch (error) {
            throw new Error(`Failed to continue checkout: ${error}`);
        }
    }

    
    public async finishOrder() {
        try {
            // Assert finish button is visible before clicking
            await expect(this.page.locator(this.finishOrderButton)).toBeVisible();
            await this.page.locator(this.finishOrderButton).click();
        } catch (error) {
            throw new Error(`Failed to finish order: ${error}`);
        }
    }

   
    public async validateSuccessMessage(expectedMessage: string) {
        try {
            // Assert success message element is visible
            await expect(this.page.locator(this.orderSuccessMessage)).toBeVisible();
            // Assert the text content matches expected message
            await expect(this.page.locator(this.orderSuccessMessage)).toHaveText(expectedMessage);
        } catch (error) {
            throw new Error(`Failed to validate success message: ${error}`);
        }
    }
}
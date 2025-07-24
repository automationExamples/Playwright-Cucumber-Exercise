import { Page, expect } from "@playwright/test"

export class Login {
    private readonly page: Page;
    private readonly password: string = 'secret_sauce';
    private readonly passwordField: string = 'input[id="password"]';
    private readonly userNameField: string = 'input[id="user-name"]';
    private readonly loginButton: string = 'input[id="login-button"]';
    // Locator for error message display
    private readonly errorMessage: string = 'h3[data-test="error"]';

    constructor(page: Page) {
        this.page = page;
    }

    
    public async validateTitle(expectedTitle: string) {
        try {
            const pageTitle = await this.page.title();
            await expect(pageTitle).toBe(expectedTitle);
        } catch (error) {
            throw new Error(`Failed to validate page title: ${error}`);
        }
    }

 
    public async loginAsUser(userName: string) {
        try {
            // Assert username field is visible before filling
            await expect(this.page.locator(this.userNameField)).toBeVisible();
            await this.page.locator(this.userNameField).fill(userName);
            
            // Assert password field is visible before filling
            await expect(this.page.locator(this.passwordField)).toBeVisible();
            await this.page.locator(this.passwordField).fill(this.password);
            
            // Assert login button is visible before clicking
            await expect(this.page.locator(this.loginButton)).toBeVisible();
            await this.page.locator(this.loginButton).click();
        } catch (error) {
            throw new Error(`Failed to login as user ${userName}: ${error}`);
        }
    }

   
    public async validateErrorMessage(expectedMessage: string) {
        try {
            // Assert error message element is visible
            await expect(this.page.locator(this.errorMessage)).toBeVisible();
            // Get the text content and assert it matches expected message
            await expect(this.page.locator(this.errorMessage)).toHaveText(expectedMessage);
        } catch (error) {
            throw new Error(`Failed to validate error message: ${error}`);
        }
    }
}
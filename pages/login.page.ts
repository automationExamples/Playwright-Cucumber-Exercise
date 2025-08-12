import { Page } from "@playwright/test"
import { expect } from "@playwright/test"


export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'

    constructor(page: Page) {
        this.page = page;
    }

    // public async validateTitle(expectedTitle: string) {
    //     const pageTitle = await this.page.title();
    //     if (pageTitle !== expectedTitle) {
    //       throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
    //     }
    // }

    public async validateTitle(expectedTitle: string) {
        //ignore spaces and capitalization
        const actualTitle = (await this.page.title()).trim().toLowerCase();
        const normalizedExpected = expectedTitle.trim().toLowerCase();

        expect(actualTitle, 
            `Expected page title to be "${expectedTitle}", but found "${actualTitle}"`
        ).toBe(normalizedExpected);
    }

    public async validateErrorMessage(expectedMessage: string) {
        //get the error message in login form
        const actualMessage = (await this.page.locator('[data-test="error"]').textContent()) || '';

        const normalizedActual = actualMessage.trim().toLowerCase();
        const normalizedExpected = expectedMessage.trim().toLowerCase();

        expect(normalizedActual,
            `Expected error message to be "${expectedMessage}", but found "${actualMessage.trim()}"`
        ).toBe(normalizedExpected);
    }

    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }
}
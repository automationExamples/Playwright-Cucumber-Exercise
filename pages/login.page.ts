import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }

    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }

    public async validateErrorMessage(expectedErrorMessage: string) {
        const errorMessageLocator = this.page.locator('h3[data-test="error"]');
        try {
            await errorMessageLocator.waitFor({ state: 'visible' });
            const actualErrorMessage = await errorMessageLocator.textContent();
            if (!actualErrorMessage || !actualErrorMessage.includes(expectedErrorMessage)) {
                throw new Error(`Expected error message to contain "${expectedErrorMessage}" but found "${actualErrorMessage}"`);
            }
        } catch (error) {
            // Ensure error is of type Error
            const err: Error = error as Error;
            throw new Error(`Error occurred: ${err.message}`);
        }
    }
}
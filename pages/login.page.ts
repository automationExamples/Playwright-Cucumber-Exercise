import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorContainer: string = 'h3[data-test="error"]'
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
    public async getLoginError(): Promise<string> {
        const el = this.page.locator(this.errorContainer);
        return await el.innerText();
    }
 
public async validateLoginError(expectedMessage: string) {
        const actual = await this.getLoginError();
        if (actual.trim() !== expectedMessage.trim()) {
            throw new Error(`Expected login error to be "${expectedMessage}" but found "${actual}"`);
        }
    }
 
}
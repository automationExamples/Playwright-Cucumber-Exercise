import { Page,expect } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorMessage: string = 'h3[data-test="error"]'



    constructor(page: Page) {
        this.page = page;
    }

    public async verifyTitle(targetTitle: string) {
        const webpageTitle = await this.page.title();
        if (webpageTitle !== targetTitle) {
          throw new Error(`Expected title to be ${targetTitle} but found ${webpageTitle}`);
        }
    }

    public async signInAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }

    public async checkErrorMessage(message: string) {
        const error =  this.page.locator(this.errorMessage)
        await expect(error).toContainText(message)
    }
}
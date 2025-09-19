import { expect, Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errMsg: string = 'h3'
    private readonly defaultTimeout: number = 5000

    constructor(page: Page) {
        this.page = page;
    }

    public async validateTitle(expectedTitle: string) {
        // Wait for page to be in a loaded state and assert title
        await this.page.waitForLoadState('domcontentloaded', { timeout: this.defaultTimeout })
        const actual = await this.page.title()
        await expect(actual).toBe(expectedTitle)
    }

    public async loginAsUser(userName: string) {
        const userLocator = this.page.locator(this.userNameField)
        const passLocator = this.page.locator(this.passwordField)
        const loginBtn = this.page.locator(this.loginButton)

        await expect(userLocator).toBeVisible({ timeout: this.defaultTimeout })
        await userLocator.fill(userName)

        await expect(passLocator).toBeVisible({ timeout: this.defaultTimeout })
        await passLocator.fill(this.password)

        await expect(loginBtn).toBeEnabled({ timeout: this.defaultTimeout })
        await loginBtn.click()
    }

    public async validateErrorMsg(expErrorMsg: string) {
        const errLocator = this.page.locator(this.errMsg)
        // Wait for error to appear and validate its text
        await expect(errLocator).toBeVisible({ timeout: this.defaultTimeout })
        await expect(errLocator).toHaveText(expErrorMsg, { timeout: this.defaultTimeout })
        console.log("Error Message validated successfully :", expErrorMsg)
    }
}
import { Page, expect} from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorlocator: string = 'h3[data-test="error"]'

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
    public async validateErrorMessage(message: string) {
        const errorMessage = await this.page.locator(this.errorlocator)
        await expect(errorMessage).toHaveText(message)
        await expect(this.page.locator('h3', { hasText: message })).toBeVisible();
    }
    public async validatelogOut(menuOption: string) {
        await expect(this.page.locator(this.loginButton)).toBeVisible()
        
    }
}
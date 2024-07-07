import { expect, Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly loginErrorMessage: string = 'h3:has-text("Sorry, this user has been locked out.")'
    private readonly menuButton: string = 'button[id="react-burger-menu-btn"]'
    private readonly logoutLink: string = 'a[id="logout_sidebar_link"]'

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

    public async validateLoginErrorMessage(loginErrorMsg: string) {
        expect(await this.page.locator(this.loginErrorMessage).innerText()).toContain(loginErrorMsg);
    }

    public async logout() {
        await this.page.locator(this.menuButton).click();
        await this.page.locator(this.logoutLink).click();
    
    }
}
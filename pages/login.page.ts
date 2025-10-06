import { Page, expect } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorMessage: string = '[data-test="error"]'
    private readonly hamburgerMenu: string = 'button[id="react-burger-menu-btn"]'
    private readonly logoutLink: string = 'a[id="logout_sidebar_link"]'

    constructor(page: Page) {
        this.page = page;
    }  

    public async openHamburgerMenu() {
        await this.page.locator(this.hamburgerMenu).click();
    }

    public async logout() {
        await this.page.locator(this.logoutLink).click();
    }

    public async validateLoginPageDisplayed() {
        await this.page.locator(this.loginButton).waitFor({ state: 'visible' });
        const url = this.page.url();
        if (!url.includes('saucedemo.com')) {
            throw new Error(`Expected to be on login page but found URL: ${url}`);
        }
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

    public async validateErrorMessage(expectedMessage: string) {
        const errorLocator = this.page.locator(this.errorMessage);
        await expect(errorLocator).toBeVisible();
        await expect(errorLocator).toHaveText(expectedMessage);
    }
}
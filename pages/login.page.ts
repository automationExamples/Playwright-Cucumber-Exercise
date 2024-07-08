import { Page } from "@playwright/test"
import { click, fillText, getText, getTitle } from "../webUtils"
import { get } from "http"

export class Login {
    private readonly page: Page
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorMessage: string = 'h3[data-test="error"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async enterUserName(userName: string) {
        await fillText(this.page, this.userNameField, userName)
    }

    public async enterPassword(password: string) {
        await fillText(this.page, this.passwordField, password)
    }

    public async clickLoginButton() {
        await click(this.page, this.loginButton)
    }

    public async loginAsUser(userName: string, password: string) {
        await this.enterUserName(userName)
        await this.enterPassword(password)
        await this.clickLoginButton()
    }

    public async getPageTitle(): Promise<string> {
        return getTitle(this.page)
    }

    public async getErrorMessage(): Promise<string> {
        return getText(this.page, this.errorMessage)
    }




}

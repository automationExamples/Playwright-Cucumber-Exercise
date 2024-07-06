import { Page,Locator, ElementHandle, chromium } from "@playwright/test"



export class LoginPage {
    private readonly page: Page
    private readonly password: string = 'secret_sauce';
    private readonly cartIcon: string = '//*[@id="shopping_cart_container"]/a/span';
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
   

    constructor(page: Page) {
        this.page = page;
    }

    async open (url: string){
        await this.page.goto(url);
    }

   
    //public async loginAsUser(userName: string) {
    //    await this.page.fill('#username', userName);
    //    await this.page.fill('#password','password');
     //   await this.page.click('#login-button');
    //}

    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }

    static async create(page: Page): Promise<LoginPage>{
        const loginPage = new LoginPage(page);
        return loginPage;
    }

    public async goToCart() {
        await this.page.locator(this.cartIcon).click()
    }
}

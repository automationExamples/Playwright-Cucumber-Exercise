import { Page,Locator, ElementHandle, chromium } from "@playwright/test"

export class LoginPage {
    private readonly page: Page
   

    constructor(page: Page) {
        this.page = page;
    }

    async open (url: string){
        await this.page.goto(url);
    }

   
    public async loginAsUser(userName: string) {
        await this.page.fill('#username', userName);
        await this.page.fill('#password','password');
        await this.page.click('#login-button');
    }

    static async create(page: Page): Promise<LoginPage>{
        const loginPage = new LoginPage(page);
        return loginPage;
    }
}

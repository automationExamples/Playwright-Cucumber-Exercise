import { Page, Locator, ElementHandle } from "@playwright/test"

export class CheckoutPage {
    private readonly page: Page;
    private readonly firstNameFieldSelector: string = '#first-name';
    private readonly lastNameFieldSelector: string = '#last-name';
    private readonly zipCodeFieldSelector: string = '#zip-code';
    private readonly continueButtonSelector: string = '.checkout-step-one .btn_primary';
    private readonly finishButtonSelector: string = '.checkout-step-two .btn_primary';
   

    constructor(page: Page) {
        this.page = page;
    }

    async fillPersonalInfo(firstName: string, lastName: string, zipCode: string){
await this.page.fill(this.firstNameFieldSelector,firstName);
await this.page.fill(this.lastNameFieldSelector, lastName);
await this.page.fill(this.zipCodeFieldSelector, zipCode);
    }
    async continue (){
        await this.page.click(this.continueButtonSelector);
    }
    async finish() {
        await this.page.click(this.finishButtonSelector);
    }
}
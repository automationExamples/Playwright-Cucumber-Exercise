import { Page, Locator, ElementHandle } from "@playwright/test"

export class CheckoutPage {
    private readonly page: Page;
     private readonly firstNameFieldSelector: string = '//*[@id="first-name"]';
    private readonly lastNameFieldSelector: string = '//*[@id="last-name"]';
    private readonly zipCodeFieldSelector: string = '//*[@id="postal-code"]';
    private readonly continueButtonSelector: string = 'Continue';
    private readonly finishButtonSelector: string = 'Finish';
   

    constructor(page: Page) {
        this.page = page;
    }

    async fillPersonalInfo(firstName: string, lastName: string, zipCode: string){
await this.page.fill(this.firstNameFieldSelector,firstName);
await this.page.fill(this.lastNameFieldSelector, lastName);
await this.page.fill(this.zipCodeFieldSelector, zipCode);
    }
    async continue (){
        await this.page.getByText(this.continueButtonSelector).click();
    }
    async finish() {
        await this.page.getByText(this.finishButtonSelector).click();
    }
}
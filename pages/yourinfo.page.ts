import { Page } from "@playwright/test"

export class YourInfo {
    private readonly page: Page
    private readonly firstNameField: string = '//input[@id="first-name"]'
    private readonly lastNameField: string = '//input[@id="last-name"]'
    private readonly zipPortalField: string = '//input[@id="postal-code"]'
    private readonly continueButtonField: string = '//input[@id="continue"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
    

    public async fillInfoAndContinue(firstName: string, lastName: string, zipCode: string) {

        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.zipPortalField).fill(zipCode)
       

    }

    public async clickContinueButton() {

         await this.page.locator(this.continueButtonField).click()

    }
}
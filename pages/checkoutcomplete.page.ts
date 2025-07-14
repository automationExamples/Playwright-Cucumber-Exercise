import { Page } from "@playwright/test"

export class CheckoutComplete {
    private readonly page: Page
    private readonly ThankyouTextField: string = '//h2[@class="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
    
    public async validateThankyouMessage(expectedMessage: string) {
               const actualMessage = await this.page.locator(this.ThankyouTextField).textContent();
  
       if (actualMessage?.trim() !== expectedMessage) {
         throw new Error(`Expected message to be "${expectedMessage}" but found "${actualMessage}"`);
          }
    }
}
//Checkout Page added by Madhavi
import { expect, Locator, Page } from "@playwright/test"

export class checkout {
    private readonly page: Page
    private readonly firstNameField: string = '//input[@id="first-name"]'
    private readonly lastNameField: string = '//input[@id="last-name"]'
    private readonly zipCodeField: string = '//input[@id="postal-code"]'
    private readonly continue: string = 'input[id="continue"]'
    private readonly finish: string = 'button[id="finish"]'
    private readonly successMsg: string = '//h2[text()="Thank you for your order!"]'

    constructor(page: Page) {
        this.page = page;
    }

     public async EnterFirstLastNamesZip(firstName: string, lastName: string, zipCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.zipCodeField).fill(zipCode)
       
    }
  
   public async clickButtonByName(step: 'Continue' | 'Finish') {
  let locator: Locator;

  switch (step) {
    case 'Continue':
      locator = this.page.locator(this.continue);
      break;
    case 'Finish':
      locator = this.page.locator(this.finish);
      break;
    default:
      throw new Error(`Unknown step: ${step}`);
  }

  await locator.click();
}

public async verifySuccessMsgs(successMesg: string) {
       await expect(this.page.locator(this.successMsg)).toBeVisible();
       await expect(this.page.locator(this.successMsg)).toHaveText(successMesg);
             
}

}
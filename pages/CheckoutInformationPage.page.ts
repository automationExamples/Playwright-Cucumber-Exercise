import { Page, Locator, expect } from "@playwright/test";

export class CheckoutInformationPage {
  private readonly page: Page;

  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly zipCode: Locator;
  private readonly continueBtn: Locator;


  constructor(page: Page) {
    this.page = page;
    this.firstName = this.page.locator("input#first-name");
    this.lastName = this.page.locator("input#last-name");
    this.zipCode = this.page.locator("input#postal-code");
    this.continueBtn = this.page.locator("input#continue");
  }

  async inputInformation(firstName: string, lastName: string, zipCode: string){
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
  }

  async clickContinue(){
    await this.continueBtn.click();
  }
}

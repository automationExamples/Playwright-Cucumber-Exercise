import { Page } from "@playwright/test"
import { test, expect } from '@playwright/test';
export class checkOut {
    private readonly page: Page
    private readonly cartIcon: string = '//a[@data-test="shopping-cart-link"]'
    private readonly checkOut: string = '//button[@data-test="checkout"]'
    private readonly firstName: string = 'input#first-name[data-test="firstName"]';
  private readonly lastName: string = 'input#last-name[data-test="lastName"]';
  private readonly postalCode: string = 'input#postal-code[data-test="postalCode"]';
  private readonly continueBtn: string = 'input#continue[data-test="continue"]';
  private readonly finishBtn: string = 'button#finish[data-test="finish"]';
  private readonly SuccessMsg: string = '//h2[@data-test="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async viewCart() {
        await this.page.locator(this.cartIcon).click()
    }
    public async clickCheckOut() {
        await this.page.locator(this.checkOut).click()
    }

    //Filling the data using cucumber scenario outline
    public async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill(this.firstName, firstName);
        await this.page.fill(this.lastName, lastName);
        await this.page.fill(this.postalCode, postalCode);

      }


      
  public async selectContinue() {
    await this.page.locator(this.continueBtn).click();
  }

  
  public async selectFinish() {
    await this.page.locator(this.finishBtn).click();
  }

  
   public async verifyTextDisplayed(expectedText: string) {

 
  await expect(this.page.locator(this.SuccessMsg)).toHaveText(expectedText);
  }

}
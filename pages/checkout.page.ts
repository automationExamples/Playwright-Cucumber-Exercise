import { Page } from '@playwright/test';

export class Checkout {
  private readonly page: Page;
  private readonly firstNameInputSelector: string = 'input#first-name[data-test="firstName"]';
  private readonly lastNameInputSelector: string = 'input#last-name[data-test="lastName"]';
  private readonly postalCodeInputSelector: string = 'input#postal-code[data-test="postalCode"]';
  private readonly checkoutButtonSelector: string = 'button.btn.btn_action.btn_medium.checkout_button[data-test="checkout"]';
  private readonly continueButtonSelector: string = 'input#continue[data-test="continue"]';
  private readonly finishButtonSelector: string = 'button#finish[data-test="finish"]';



  constructor(page: Page) {
    this.page = page;
  }

  public async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.firstNameInputSelector, firstName);
    await this.page.fill(this.lastNameInputSelector, lastName);
    await this.page.fill(this.postalCodeInputSelector, postalCode);
  }

  // Optionally, you can add a method to submit the checkout form
  public async submitCheckoutForm() {
    await this.page.locator(this.checkoutButtonSelector).click();
  }

  // Method to click on the "Continue" button
  public async selectContinue() {
    await this.page.locator(this.continueButtonSelector).click();
  }

  // Method to click on the "Finish" button
  public async selectFinish() {
    await this.page.locator(this.finishButtonSelector).click();
  }

  // Method to verify "Thank you for your oder!"
   // Method to verify if the specified text is displayed on the page
   public async verifyTextDisplayed(expectedText: string) {
    await this.page.waitForSelector(`text=${expectedText}`);
  }

}

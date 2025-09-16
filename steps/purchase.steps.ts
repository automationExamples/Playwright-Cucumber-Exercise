import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { LoginPage } from '../pages/LoginPage.page';
import { TestContext } from '../support/TestContext';

  When('I click the Cart icon', async function () {
    await this.context.productPage().clickCart();
  });
  
  When('I click Checkout', async function () {
    await this.context.cartPage().clickCheckout();
  });
  
  When('I type {string}, {string}, and {string} into their respective fields', async function (firstName: string, lastName: string, zipCode: string) {
    await this.context.checkoutInformationPage().inputInformation(firstName, lastName, zipCode);
  });
  
  When('I click Continue', async function () {
    await this.context.checkoutInformationPage().clickContinue();
  });
  
  When('I click Finish', async function () {
    await this.context.checkoutOverviewPage().clickFinish();
  });
  
  Then('I should see the confirmation text {string}', async function (expectedText: string) {
    await this.context.checkoutConfirmationPage().verifyConfirmationHeader(expectedText);
  });
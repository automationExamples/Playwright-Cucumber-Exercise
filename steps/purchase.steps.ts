import { Page } from '@playwright/test';
import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { PurchasePage } from "../pages/purchasePage";


Then('I will add the {string} to the cart', async (product) => {
  await new PurchasePage(getPage()).addProducttoCart(product);
});
Then('Select the cart \\(top-right\\)', async () => {
  await new PurchasePage(getPage()).clickGoToCart();
});
Then('Select Checkout', async () => {
  await new PurchasePage(getPage()).clickCheckouButton();
});

Then('Fill in the {string}, {string}, and {string}', async (fName,lName,zipCode) => {
  await new PurchasePage(getPage()).enterCustomerInfo(fName,lName,zipCode);
});

Then('Select Continue', async () => {
  await new PurchasePage(getPage()).clickContinueButton();
});

Then('Select Finish', async () => {
  await new PurchasePage(getPage()).clickFinishButton();
});

Then('Validate the text {string}', async (expMessage) => {
    await new PurchasePage(getPage()).validateSuccessMsg(expMessage);
});
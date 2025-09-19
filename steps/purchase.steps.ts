import { Page } from '@playwright/test';
import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { PurchasePage } from "../pages/purchasePage";


Then('I will add the {string} to the cart', async (product: string): Promise<void> => {
  try {
    await new PurchasePage(getPage()).addProducttoCart(product);
  } catch (err) {
    console.error('Failed to add product to cart:', product, err)
    throw err
  }
});
Then(/^Select the cart \(top-right\)$/, async (): Promise<void> => {
  try {
    await new PurchasePage(getPage()).clickGoToCart();
  } catch (err) {
    console.error('Failed to click cart icon', err)
    throw err
  }
});
Then('Select Checkout', async (): Promise<void> => {
  try {
    await new PurchasePage(getPage()).clickCheckouButton();
  } catch (err) {
    console.error('Failed to click checkout button', err)
    throw err
  }
});

Then('Fill in the {string}, {string}, and {string}', async (fName: string, lName: string, zipCode: string): Promise<void> => {
  try {
    await new PurchasePage(getPage()).enterCustomerInfo(fName, lName, zipCode);
  } catch (err) {
    console.error('Failed to enter customer info', { fName, lName, zipCode }, err)
    throw err
  }
});

Then('Select Continue', async (): Promise<void> => {
  try {
    await new PurchasePage(getPage()).clickContinueButton();
  } catch (err) {
    console.error('Failed to click continue', err)
    throw err
  }
});

Then('Select Finish', async (): Promise<void> => {
  try {
    await new PurchasePage(getPage()).clickFinishButton();
  } catch (err) {
    console.error('Failed to click finish', err)
    throw err
  }
});

Then('Validate the text {string}', async (expMessage: string): Promise<void> => {
  try {
    await new PurchasePage(getPage()).validateSuccessMsg(expMessage);
  } catch (err) {
    console.error('Failed to validate success message', expMessage, err)
    throw err
  }
});
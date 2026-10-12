import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Checkout  } from '../pages/checkout.page';

Then ('I will select checkout', async () => {
    await new Checkout(getPage()).startCheckout();
});

Then('I will fill in the checkout information with first name {string}, last name {string}, and zip {string}',
  async (firstName: string, lastName: string, zip: string) => {
    await new Checkout(getPage()).enterCustomerInfo({ firstName, lastName, postalCode: zip });
  });
 
Then('I will select continue', async () => {
  await new Checkout(getPage()).continueToOverview();
});
 
Then('I will select finish', async () => {
  await new Checkout(getPage()).finishOrder();
});
 
Then('I should see the order confirmation text {string}', async (expectedText: string) => {
  await new Checkout(getPage()).verifyConfirmation(expectedText);
});

Then('the order totals should add up', async () => {
  await new Checkout(getPage()).verifyOrderTotals();
});
 
Then('I will try to continue', async () => {
  await new Checkout(getPage()).submitCustomerInfo();
});
 
Then('I should see the checkout error message {string}', async (expectedMessage: string) => {
  await new Checkout(getPage()).verifyErrorMessage(expectedMessage);
});
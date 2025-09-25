import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';
import { testData } from '../data/test-data';

// Step definition that matches "Select the cart (top-right)"
Then('Select the cart \\(top-right\\)', async () => {
  await new Purchase(getPage()).selectCart();
});

// Step definition that matches "Select Checkout" 
Then('Select Checkout', async () => {
  await new Purchase(getPage()).selectCheckout();
});

Then('Fill in the First Name, Last Name, and Zip\\/Postal Code', async () => {
  await new Purchase(getPage()).fillCheckoutFormWithDefaults();
});

Then('Select Continue', async () => {
  await new Purchase(getPage()).selectContinue();
});

Then('Select Finish', async () => {
  await new Purchase(getPage()).selectFinish();
});

Then("Validate the text 'Thank you for your order!'", async () => {
  await new Purchase(getPage()).validateSuccessMessage();
});
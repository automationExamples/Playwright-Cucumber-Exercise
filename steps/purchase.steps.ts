import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Checkout } from '../pages/purchase.page';


// Step definition for starting the checkout process
Then('I will select checkout', async () => {
  await new Checkout(getPage()).proceedToCheckout();
});

// Step definition for filling checkout form with customer details
Then('I will fill in the checkout information', async () => {
  await new Checkout(getPage()).fillCheckoutInformation();
});

// Step definition for continuing to order review
Then('I will select continue', async () => {
  await new Checkout(getPage()).continueCheckout();
});

// Step definition for completing the order
Then('I will select finish', async () => {
  await new Checkout(getPage()).finishOrder();
});

// Step definition for validating order success message
Then('I should see the success message {string}', async (expectedMessage) => {
  await new Checkout(getPage()).validateSuccessMessage(expectedMessage);
});
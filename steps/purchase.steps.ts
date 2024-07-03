import { Then,When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';


/**
 * Step definition to select the cart from the top-right corner of the page.
 */
Then('Select the cart \\(top-right)', async () => {
  await new Purchase(getPage()).selectCart();
});


/**
 * Step definition to click on the Checkout button.
 */
Then('Select Checkout', async () => {
  await new Purchase(getPage()).clickCheckout();

});

/**
 * Step definition to fill in checkout information including name and zip/postal code.
 * @param firstName - The first name of the customer.
 * @param lastName - The last name of the customer.
 * @param zipCode - The zip or postal code of the customer.
 */
Then('Fill in the name {string}, {string}, and Zip\\/Postal Code {string}', async (firstName, lastName, zipCode) => {
  await new Purchase(getPage()).fillCheckoutInformation(firstName, lastName, zipCode);
});


/**
 * Step definition to click on the Continue button after entering checkout information.
 */
Then('Select Continue', async () => {
  await new Purchase(getPage()).clickOnContinue();
});

Then('Select Finish', async () => {
  await new Purchase(getPage()).clickOnFinish();
});

/**
 * Step definition to validate the thank you message after completing the purchase.
 * @param thankYouMsg - The expected thank you message text.
 */
Then('Validate the text {string}', async (thankYouMsg) => {
  await new Purchase(getPage()).verifyThankYouMsg(thankYouMsg);
});


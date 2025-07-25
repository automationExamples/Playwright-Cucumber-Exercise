import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';


Then('Select the cart \\(top-right)', async () => {
  await new Purchase(getPage()).clickOnCart();
});

Then('Select Checkout', async () => {
  await new Purchase(getPage()).clickOnCheckoutButton();
});

Then('Fill in the First Name, Last Name, and Zip\\/Postal Code', async () => {
  await new Purchase(getPage()).fillUserDetails();
});

Then('Select Continue', async () => {
  await new Purchase(getPage()).clickOnContinueButton();
});

Then('Select Finish', async () => {
  await new Purchase(getPage()).clickOnfinishButton();
});

Then('Validate the text {string}', async (expectedSuccessMessage) => {
  await new Purchase(getPage()).verifySuccessMessage(expectedSuccessMessage);
});
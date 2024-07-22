import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('Select Checkout', async () => {
    await new Purchase(getPage()).checkoutButton();
  });
  
  Then('Fill in the First Name, Last Name, and Zip\\/Postal Code', async () => {
    await new Purchase(getPage()).checkoutInfo();
  });
  
  Then('Select Continue', async () => {
    await new Purchase(getPage()).continueButton();
  });
  
  Then('Select Finish', async () => {
    await new Purchase(getPage()).finishButton();
  });
  
  Then('Validate the text {string}', async (string) => {
    await new Purchase(getPage()).successMessage();
  });
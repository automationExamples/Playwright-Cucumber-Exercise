import { Then, When} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Checkout } from '../pages/checkout.page';

When('I fill in the {string}, {string}, and {string}', async (firstName: string, lastName: string, postalCode: string) => {
    await new Checkout(getPage()).enterUserDetails(firstName, lastName, postalCode);
  });
  
When('I select Continue', async () => {
    await new Checkout(getPage()).continueCheckout();
  });

When('I select Finish', async () => {
    await new Checkout(getPage()).finishCheckout();
  });
  
Then('I validate the text {string}', async (expectedMessage: string) => {
    const confirmationText = await new Checkout(getPage()).getConfirmationText();
    if (confirmationText !== expectedMessage) {
      throw new Error(`Expected confirmation message to be "${expectedMessage}" but got "${confirmationText}"`);
    }
  });
  
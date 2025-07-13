import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { YourInfo } from '../pages/yourinfo.page';
import { Overview } from '../pages/overview.page';
import { CheckoutComplete } from '../pages/checkoutcomplete.page';

Then('I should see the Error Message {string}', async (expectedErrorMessage) => {
  await new CheckoutComplete(getPage()).validateThankyouMessage(expectedErrorMessage);
});
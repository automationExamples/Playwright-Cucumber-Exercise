import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { YourInfo } from '../pages/yourinfo.page';
import { Overview } from '../pages/overview.page';
import { CheckoutComplete } from '../pages/checkoutcomplete.page';

Then('I Validate the text {string}', async (expectedErrorMessage) => {
  await new CheckoutComplete(getPage()).validateThankyouMessage(expectedErrorMessage);
});
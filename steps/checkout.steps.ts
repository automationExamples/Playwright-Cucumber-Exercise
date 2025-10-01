import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Checkout } from '../pages/checkout.page';

Then('I should see the text {string} on the checkout complete page', async (thankYouMessage) => {
  await new Checkout(getPage()).validateThankYouMessage(thankYouMessage);
});
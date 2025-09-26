import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will select the cart', async () => {
  await new Purchase(getPage()).selectCart();
});

Then('I will select checkout', async () => {
  await new Purchase(getPage()).selectCheckout();
});

Then('I will fill in the checkout information with {string}, {string}, and {string}', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).fillCheckoutInformation(firstName, lastName, postalCode);
});

Then('I will select continue', async () => {
  await new Purchase(getPage()).selectContinue();
});

Then('I will select finish', async () => {
  await new Purchase(getPage()).selectFinish();
});

Then('I should see the message {string}', async (expectedMessage) => {
  await new Purchase(getPage()).validateThankYouMessage(expectedMessage);
});
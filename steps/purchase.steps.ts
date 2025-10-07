import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will select the cart', async () => {
  await new Purchase(getPage()).selectCart();
});

Then('I will select Checkout', async () => {
  await new Purchase(getPage()).selectCheckout();
});

Then('I will fill in the checkout information with first name {string}, last name {string}, and zip code {string}', async (firstName, lastName, zipCode) => {
  await new Purchase(getPage()).fillCheckoutInfo(firstName, lastName, zipCode);
});

Then('I will select Continue', async () => {
  await new Purchase(getPage()).selectContinue();
});

Then('I will select Finish', async () => {
  await new Purchase(getPage()).selectFinish();
});

Then('I should see the success message {string}', async (expectedMessage) => {
  await new Purchase(getPage()).validateSuccessMessage(expectedMessage);
});
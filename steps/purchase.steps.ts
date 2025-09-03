import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will select the cart', async () => {
  await new Purchase(getPage()).selectCart();
});

Then('I will select Checkout', async () => {
  await new Purchase(getPage()).selectCheckout();
});

Then('I will fill in the First Name as {string}', async (firstName) => {
  await new Purchase(getPage()).fillInFirstName(firstName);
});

Then('I will fill in the Last Name as {string}', async (lastName) => {
  await new Purchase(getPage()).fillInLastName(lastName);
});

Then('I will fill in the Zip Code as {string}', async (zipCode) => {
  await new Purchase(getPage()).fillInZipCode(zipCode);
});

Then('I will select Continue', async () => {
  await new Purchase(getPage()).selectContinue();
});

Then('I will select Finish', async () => {
  await new Purchase(getPage()).selectFinish();
});

Then('I should see the message {string}', async (orderMessage) => {
  await new Purchase(getPage()).validateOrderMessage(orderMessage);
});
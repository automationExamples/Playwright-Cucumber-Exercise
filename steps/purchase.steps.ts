import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will select the top-right cart link', async () => {
  await new Purchase(getPage()).clickCartLink();
});

Then('I will click the Checkout button', async () => {
  await new Purchase(getPage()).clickCheckout();
});

Then('I will set First Name to {string}', async (firstName) => {
  await new Purchase(getPage()).setFirstName(firstName);
});

Then('I will set Last Name to {string}', async (lastName) => {
  await new Purchase(getPage()).setLastName(lastName);
});

Then('I will set Postal Code to {string}', async (postalCode) => {
  await new Purchase(getPage()).setPostalCode(postalCode);
});

Then('I will click Continue', async () => {
  await new Purchase(getPage()).clickContinue();
});

Then('I will click Finish', async () => {
  await new Purchase(getPage()).clickFinish();
});

Then('I will see the header message {string}', async (expectedMessage) => {
  await new Purchase(getPage()).validateOrderMessage(expectedMessage);
});
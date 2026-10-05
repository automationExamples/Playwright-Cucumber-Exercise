import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Cart } from '../pages/cart.page';
import { Checkout } from '../pages/checkout.page';

When('I select the cart', async () => {
  await new Cart(getPage()).openCart();
});

When('I select Checkout', async () => {
  await new Cart(getPage()).selectCheckout();
});

When('I fill in the First Name {string}, Last Name {string}, and Zip\\/Postal Code {string}', async (firstName: string, lastName: string, postalCode: string) => {
  await new Checkout(getPage()).fillInformation(firstName, lastName, postalCode);
});

When('I select Continue', async () => {
  await new Checkout(getPage()).selectContinue();
});

When('I select Finish', async () => {
  await new Checkout(getPage()).selectFinish();
});

Then('I should see the text {string}', async (expectedText: string) => {
  await new Checkout(getPage()).validateCompleteHeader(expectedText);
});

Then('I should see the checkout error message {string}', async (expectedMessage: string) => {
  await new Checkout(getPage()).validateErrorMessage(expectedMessage);
});

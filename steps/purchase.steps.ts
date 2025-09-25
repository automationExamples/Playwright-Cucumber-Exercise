import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I select the cart', async () => {
  await new Purchase(getPage()).selectCart();
});

Then('I select Checkout', async () => {
  await new Purchase(getPage()).selectCheckout();
});

Then(/^I fill in the First Name "([^"]+)", Last Name "([^"]+)", and Zip\/Postal Code "([^"]+)"$/, async function (firstName, lastName, postalCode) {
  await new Purchase(getPage()).fillCheckoutInfo(firstName, lastName, postalCode);
});

Then('I select Continue', async () => {
  await new Purchase(getPage()).selectContinue();
});

Then('I select Finish', async () => {
  await new Purchase(getPage()).selectFinish();
});

Then('I should see the thank you text {string}', async (expectedText) => {
  await new Purchase(getPage()).validateThankYouText(expectedText);
});

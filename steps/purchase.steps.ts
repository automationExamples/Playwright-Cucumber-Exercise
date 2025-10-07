import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will open the cart', async () => {
  await new Purchase(getPage()).openCart();
});

Then('I will select Checkout', async () => {
  await new Purchase(getPage()).clickCheckout();
});

Then('I will fill checkout info with {string}, {string}, {string}', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).fillCheckoutInfo(firstName, lastName, postalCode);
});

Then('I will select Continue', async () => {
  await new Purchase(getPage()).clickContinue();
});

Then('I will select Finish', async () => {
  await new Purchase(getPage()).clickFinish();
});

Then('I should see the thank you text {string}', async (expected) => {
  await new Purchase(getPage()).getThankYouText().then(actual => {
    if (actual.trim() !== expected.trim()) {
      throw new Error(`Expected thank you text to be "${expected}" but found "${actual}"`);
    }
  });
});

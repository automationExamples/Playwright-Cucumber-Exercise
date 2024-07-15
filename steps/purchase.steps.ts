import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

When('I navigate to the cart', async () => {
  await new Purchase(getPage()).navigateToCart();
});

When('I proceed to checkout', async () => {
  await new Purchase(getPage()).proceedToCheckout();
});

When('I fill in my billing information', async () => {
  await new Purchase(getPage()).fillBillInfo();
});

When('I click "Continue"', async () => {
    await new Purchase(getPage()).clickOnContinue();
  });

When('I complete the checkout process', async () => {
  await new Purchase(getPage()).completeCheckout();
});

Then('I should see the {string} message', async (message) => {
    await new Purchase(getPage()).successfulMessage(message);
  });
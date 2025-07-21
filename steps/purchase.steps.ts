import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

When('I go to the cart page', async () => {
  await new Purchase(getPage()).goToShoppingCart();
});

When('I start the checkout process', async () => {
  await new Purchase(getPage()).clickSubmitButton();
});

When('I provide my billing details', async () => {
  await new Purchase(getPage()).populateBillingDetails();
});

When('I continue to the next step', async () => {
    await new Purchase(getPage()).submitContinueButton();
  });

When('I finalize the checkout', async () => {
  await new Purchase(getPage()).confirmOrder();
});

Then('I should see the message {string}', async (message) => {
    await new Purchase(getPage()).validateSuccessMessage(message);
  });
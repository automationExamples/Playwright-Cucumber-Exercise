import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

When('I add the backpack to the cart', async () => {
  await new Purchase(getPage()).addBackPackToCart();
});

When('I go to the cart', async () => {
  await new Purchase(getPage()).openCart();
});

When('I proceed to checkout', async () => {
  await new Purchase(getPage()).checkout();
});

When('I enter checkout details', async () => {
  await new Purchase(getPage()).enterCheckoutDetails("John", "Doe", "12345");
});

When('I continue checkout', async () => {
  await new Purchase(getPage()).continueCheckout();
});

When('I finish the purchase', async () => {
  await new Purchase(getPage()).finishPurchase();
});

Then(/^I should see the confirmation message "(.*)"$/, async (message) => {
  await new Purchase(getPage()).validateConfirmationMessage(message);
});

import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I should go to the cart', async () => {
  await new Purchase(getPage()).goToCart();
});

Then('I should proceed to checkout', async () => {
  await new Purchase(getPage()).proceedToCheckout();
});

Then('I should enter user details {string} {string} {string}', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).enterUserDetails(firstName, lastName, postalCode);
});

Then('I should finish the purchase', async () => {
  await new Purchase(getPage()).finishPurchase();
});

Then('I should see the success message {string}', async (expectedMessage) => {
  await new Purchase(getPage()).validateSuccessMessage(expectedMessage);
});

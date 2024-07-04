import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Purchase } from '../pages/purchase.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('Select the cart \\(top-right)', async () => {
  await new Purchase(getPage()).selectCart();
});

Then('Select Checkout', async () => {
  await new Purchase(getPage()).clickCheckout();

});

Then('Fill in the name {string}, {string}, and Zip\\/Postal Code {string}', async (firstName, lastName, zipCode) => {
  await new Purchase(getPage()).fillCheckoutInformation(firstName, lastName, zipCode);
});

Then('Select Continue', async () => {
  await new Purchase(getPage()).clickOnContinue();
});

Then('Select Finish', async () => {
  await new Purchase(getPage()).clickOnFinish();
});


Then('Validate the text {string}', async (thankYouMsg) => {
  await new Purchase(getPage()).verifyThankYouMsg(thankYouMsg);
});



Then('Sort the items by {string}', async (sortBy) => {
  await new Product(getPage()).applyFilter(sortBy);
});


Then('Validate all {int} items are sorted correctly by {string}', async (int, sortBy) => {
  await new Product(getPage()).verifySorting(sortBy);
});
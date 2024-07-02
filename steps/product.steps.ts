import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { purchase } from '../pages/purchase.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('Select the cart \\(top-right)', async () => {
  await new purchase(getPage()).selectCart();
});

Then('Select Checkout', async () => {
  await new purchase(getPage()).clickCheckout();

});

Then('Fill in the firstname as {string} lastname as {string} and postcode as {string}', async (firstName, lastName, zipCode) => {
  await new purchase(getPage()).fillCheckoutInformation(firstName, lastName, zipCode);
});

Then('Select Continue', async () => {
  await new purchase(getPage()).clickOnContinue();
});

Then('Select Finish', async () => {
  await new purchase(getPage()).clickOnFinish();
});


Then('Validate the text {string}', async (thankYouMsg) => {
  await new purchase(getPage()).verifyThankYouMsg(thankYouMsg);
});



Then('Sort the items by {string}', async (sortBy) => {
  await new Product(getPage()).applyFilter(sortBy);
});


Then('Validate all {int} items are sorted correctly by {string}', async (int, sortBy) => {
  await new Product(getPage()).verifySorting(sortBy);
});


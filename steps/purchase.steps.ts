import { Then,When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';
import { Login } from '../pages/login.page';

Then('I will add the backpack to the cart', async () => {
    const product = new Purchase(getPage());
    await product.addBackPackToCart();
});

Then('I will go to the cart', async () => {
    const product = new Purchase(getPage());
    await product.goToCart();
});
Then('I click on the Continue Shopping button', async () => {
  const purchasePage = new Purchase(getPage());
  await purchasePage.clickContinueShopping(); 
});

Then('I should be navigated to the product list page URL {string}', async (expectedUrl: string) => {
  const purchasePage = new Purchase(getPage());
  await purchasePage.verifyCurrentUrl(expectedUrl);
});

Then('I will checkout', async () => {
    const product = new Purchase(getPage());
    await product.checkout();
});

Then('I will fill the checkout details with {string}, {string}, {string}', async (firstName, lastName, zip) => {
    const product = new Purchase(getPage());
    await product.fillCheckoutDetails(firstName, lastName, zip);
});

Then('I will finish the purchase', async () => {
    const product = new Purchase(getPage());
    await product.finishPurchase();
});

Then('I should see the success message {string}', async (expectedMessage) => {
    const product = new Purchase(getPage());
    await product.validateSuccessMessage(expectedMessage);
});
Then('I should see an error message {string}', async (errorMessage: string) => {
  const messageLocator = await getPage().locator('.error-message-container');
  const actualMessage = await messageLocator.textContent();
  if (actualMessage?.trim() !== errorMessage) {
    throw new Error(`Expected error "${errorMessage}", but got "${actualMessage}"`);
  }
  console.log(`Error message displayed correctly: ${actualMessage}`);
});





import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Cart } from '../pages/cart.page';
import { ProductCheckout} from '../pages/productcheckout.page';
import { checkoutData } from '../testData/data.json';

Then('I select the cart from the top-right corner', async () => {
  await new Cart(getPage()).selectCart();
});

Then('I perform checkout', async () => {
  await new Cart(getPage()).selectCheckout();
});

Then('I enter in the First Name, Last Name, Zip and Postal Code', async () => {
  await new ProductCheckout(getPage()).fillCheckoutInformation(checkoutData[0].firstName, checkoutData[0].lastName, checkoutData[0].postalCode);
});

Then('I select continue', async () => {
  await new ProductCheckout(getPage()).selectContinue();
});

Then('I select finish', async () => {
  await new ProductCheckout(getPage()).selectFinish();
});

Then('I should see the text {string}', async (expectedText: string) => {
  await new ProductCheckout(getPage()).verifyTextDisplayed(expectedText);
});
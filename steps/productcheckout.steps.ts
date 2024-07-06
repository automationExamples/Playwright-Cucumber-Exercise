import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { MyCart } from '../pages/mycart.page';
import { ProductCheckout} from '../pages/productcheckout.page';
import { checkoutData } from '../testData/checkout.json';

Then('I select the cart from the top-right corner', async () => {
  await new MyCart(getPage()).selectCart();
});

Then('I select checkout', async () => {
  await new MyCart(getPage()).selectCheckout();
});

Then('I fill in the First Name, Last Name, and Zip,Postal Code', async () => {
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
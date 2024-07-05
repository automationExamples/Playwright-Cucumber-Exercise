import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Cart } from '../pages/cart.page';
import { Checkout} from '../pages/checkout.page';

Then('I will select the cart from the top-right corner', async () => {
  await new Cart(getPage()).selectCart();
});

Then('I will select checkout', async () => {
  await new Cart(getPage()).selectCheckout();
});

Then('I will fill in the First Name, Last Name, and Zip,Postal Code', async () => {
  await new Checkout(getPage()).fillCheckoutInformation('John', 'Doe', '33181');
});

Then('I will select continue', async () => {
  await new Checkout(getPage()).selectContinue();
});

Then('I will select finish', async () => {
  await new Checkout(getPage()).selectFinish();
});

Then('I should see the text {string}', async (expectedText: string) => {
  await new Checkout(getPage()).verifyTextDisplayed(expectedText);
});

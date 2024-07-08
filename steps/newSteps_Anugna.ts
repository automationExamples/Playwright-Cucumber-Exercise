import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { checkOut} from '../pages/checkOut.page';

Then('Select the cart (top-right)', async ()  => {
  await new checkOut (getPage()).viewCart();
});
Then('Select Checkout', async ()  => {
  await new checkOut (getPage()).clickCheckOut();
});

//Filling the data using cucumber scenario outline
Then('Fill in the {string}, {string} and {string}', async (firstName,lastName,postalCode)  => {
  await new checkOut (getPage()).fillCheckoutInfo( firstName, lastName, postalCode);
});

Then('I select continue', async () => {
  await new checkOut(getPage()).selectContinue();
});

Then('I select finish', async () => {
  await new checkOut(getPage()).selectFinish();
});

Then('I should see the text {string}', async (expectedText: string) => {
  await new checkOut(getPage()).verifyTextDisplayed(expectedText);
});
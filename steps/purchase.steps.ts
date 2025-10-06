import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I select the cart', async () => {
    await new Purchase(getPage()).goToCart();
});

Then('I select Checkout', async () => {
    await new Purchase(getPage()).checkout();
});

Then('I fill in the First Name {string}, Last Name {string}, and Zip\\/Postal Code {string}', async (firstName, lastName, postalCode) => {
    await new Purchase(getPage()).fillCheckoutForm(firstName, lastName, postalCode);
});

Then('I select Continue', async () => {
    await new Purchase(getPage()).clickContinue();
});

Then('I select Finish', async () => {
    await new Purchase(getPage()).finishPurchase();
});

Then('I validate the text {string}', async (expectedMessage) => {
    await new Purchase(getPage()).validateSuccessMessage(expectedMessage);
});

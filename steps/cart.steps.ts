import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Cart } from '../pages/cart.page';

When('I click on checkout', async () => {
    await new Cart(getPage()).clickOnCheckout();
});

When('I enter the firstName {string} lastName {string} and zipCode {string}', async (firstName, lastName, zipCode) => {
    await new Cart(getPage()).enterBasicInfo(firstName, lastName, zipCode);
});

When('I select continue', async () => {
    await new Cart(getPage()).clickOnContinue();
});

When('I select finish', async () => {
    await new Cart(getPage()).clickOnFinish();
});

Then('I see the order confirmation message {string}', async (expectedMessage) => {
    await new Cart(getPage()).validateOrderConfirmationMessage(expectedMessage);
});
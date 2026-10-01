import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I select the cart', async () => {
    await new Purchase(getPage()).selectCart();
});

Then('I select Checkout', async () => {
    await new Purchase(getPage()).selectCheckout();
});

Then(
    'I enter First Name {string}, Last Name {string}, and Zip Code {string}',
    async (firstName, lastName, zipCode) => {
        await new Purchase(getPage()).fillCheckoutInformation(
            firstName,
            lastName,
            zipCode
        );
    }
);

Then('I select Continue', async () => {
    await new Purchase(getPage()).selectContinue();
});

Then('I select Finish', async () => {
    await new Purchase(getPage()).selectFinish();
});

Then(
    'I should see the purchase confirmation {string}',
    async (expectedMessage) => {
        await new Purchase(getPage()).validatePurchaseConfirmation(
            expectedMessage
        );
    }
);

Then(
    'I should see the checkout error message {string}',
    async (expectedMessage) => {
        await new Purchase(getPage()).validateCheckoutError(
            expectedMessage
        );
    }
);
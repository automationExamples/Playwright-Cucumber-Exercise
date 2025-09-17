import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will go to cart', async () => {
    await new Purchase(getPage()).goToCart();
});

Then('I will proceed to checkout', async () => {
    await new Purchase(getPage()).proceedToCheckout();
});

Then('I will fill checkout information with {string} and {string} and {string}', 
    async (firstName: string, lastName: string, zipCode: string) => {
    await new Purchase(getPage()).fillCheckoutInfo(firstName, lastName, zipCode);
});

Then('I will continue to overview', async () => {
    await new Purchase(getPage()).continueToOverview();
});

Then('I will finish the order', async () => {
    await new Purchase(getPage()).finishOrder();
});

Then('I should see success message {string}', async (expectedMessage: string) => {
    await new Purchase(getPage()).validateSuccessMessage(expectedMessage);
});
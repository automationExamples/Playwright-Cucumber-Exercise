import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Purchase } from '../pages/purchase.page';



Then('I will login with {string}', async (userName) => {
    await new Login(getPage()).loginAsUser(userName);
});

Then('I will add the backpack to the shopping cart', async () => {
    await new Purchase(getPage()).addBackPackToCart();
});

Then('I will Select the cart', async () => {
    await new Purchase(getPage()).cartIconClick();
});

Then('I will Select Checkout', async () => {
    await new Purchase(getPage()).checkoutButtonClick();
});

Then('I will fill customer information with', async function (dataTable) {
    const inputData = dataTable.hashes()[0];
    const { firstName, lastName, postalCode } = inputData;
    await new Purchase(getPage()).fillInCheckoutDetails(firstName, lastName, postalCode);
});

Then('I will Select Continue', async () => {
    await new Purchase(getPage()).continueButtonClick();
});

Then('I will Select Finish', async () => {
    await new Purchase(getPage()).finishButtonClick();
});

Then('I should see the confirmation message {string}', async (expectedConfirmationMsg) => {
    await new Purchase(getPage()).validateOrderConfirmation(expectedConfirmationMsg);
});
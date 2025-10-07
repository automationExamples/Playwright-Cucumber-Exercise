import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will add the backpack to the cart for purchase', async () => {
    const purchase = new Purchase(getPage());
    await purchase.addBackpackToCart();
});

Then('I select the cart', async () => {
    const purchase = new Purchase(getPage());
    await purchase.goToCart();
});

Then('I select checkout', async () => {
    const purchase = new Purchase(getPage());
    await purchase.checkoutButtonClick();
});

Then('I fill in the first name {string}, last name {string}, and postal code {string}', async (firstName, lastName, postalCode) => {
    const purchase = new Purchase(getPage());
    await purchase.fillCheckoutForm(firstName, lastName, postalCode);
});

Then('I select continue', async () => {
    const purchase = new Purchase(getPage());
    await purchase.clickContinue();
});

Then('I select finish', async () => {
    const purchase = new Purchase(getPage());
    await purchase.finishPurchase();
});

Then('I should see the text {string}', async (expectedMessage) => {
    const purchase = new Purchase(getPage());
    await purchase.validateSuccessMessage(expectedMessage);
});

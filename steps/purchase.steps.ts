import { When, Then, Given } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page'

let purchasePage: Purchase;

Given('I open the "https://www.saucedemo.com/" page', async () => {
    // No need to implement this step in steps.ts since it's in the background of the feature file.
});

Then('I will login as {string}', async (userType: string) => {
    // Logic to login based on user type, omitted for brevity.
});

Then('I will add the backpack to the cart', async () => {
    purchasePage = new Purchase(getPage());
    await purchasePage.selectCart();
});

When('Select the cart (top-right)', async () => {
    await purchasePage.selectCart();
});

When('Select Checkout', async () => {
    await purchasePage.selectCheckout();
});

When('Fill in the First Name, Last Name, and Zip/Postal Code', async () => {
    await purchasePage.fillShippingDetails('sowjanya', 'ealuri', '12345');
});

When('Select Continue', async () => {
    await purchasePage.selectContinue();
});

When('Select Finish', async () => {
    await purchasePage.selectFinish();
});

Then('Validate the text {string}', async (expectedMessage: string) => {
    await purchasePage.validateSuccessMessage(expectedMessage);
});

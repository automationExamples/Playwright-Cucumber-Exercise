import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will click on the cart', async () => {
    await new Purchase(getPage()).clickOnCart();
});

Then('I will select Checkout', async () => {
    await new Purchase(getPage()).clickOnCheckout();
})

Then('I will fill in {string}, {string}, and {string}', async (firstName, lastName, zipCode) => {
    await new Purchase(getPage()).fillInUserDetails(firstName, lastName, zipCode);
});

Then('I will Continue', async () => {
    await new Purchase(getPage()).clickOnContinue();
});

Then('I will finish the purchase', async () => {
    await new Purchase(getPage()).clickOnFinish()
});

Then('I will validate the text {string}', async (expectedMessage) => {
    await new Purchase(getPage()).validateSuccessMessage(expectedMessage)
});

Then('I will logout', async () => {
    await new Purchase(getPage()).clickOnOptions()
    await new Purchase(getPage()).clickOnLogout()
});
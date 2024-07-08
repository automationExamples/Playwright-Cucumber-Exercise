import { When, Then } from '@cucumber/cucumber';
import { Cart } from '../pages/cart.page';
import { getPage } from '../playwrightUtilities';
import { jsonData } from '../testData/checkOutData.json';

When('I select checkout', async () => {
    await new Cart(getPage()).clickOnCheckout();
});

When('I enter the firstName,lastName and postalcode', async () => {
    await new Cart(getPage()).enterInformationDetails(jsonData[0].firstName, jsonData[0].lastName,jsonData[0].postalCode);
});

When('I select continue', async () => {
    await new Cart(getPage()).clickOnContinue();
});

When('I select finish', async () => {
    await new Cart(getPage()).clickOnFinish();
});

Then('I should see the order confirmation message {string}', async (expectedMessage) => {
    await new Cart(getPage()).validateOrderConfirmationMessage(expectedMessage);
});

When('I click on back home', async () => {
    await new Cart(getPage()).clickOnBackHome();
});
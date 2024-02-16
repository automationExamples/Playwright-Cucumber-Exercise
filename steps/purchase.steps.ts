import { When,Then } from '@cucumber/cucumber';
import { Purchase } from '../pages/purchase.page';
import { getPage } from '../playwrightUtilities';

When('Click on Checkout Button', async () => {
  await new Purchase(getPage()).clickOnCheckoutButton();
});

When('Enter the First Name as {string}, Last Name as {string} and Zip or Postal Code as {string}', async (firstName,lastName,postalCode) => {
    await new Purchase(getPage()).enterUserDetails(firstName,lastName,postalCode);
  });

When('Click on Continue Button', async () => {
    await new Purchase(getPage()).clickOnContinueButton();
});

When('Click on Finish Button', async () => {
    await new Purchase(getPage()).clickOnFinishButton();
});

Then('Should see the order confirmation message as {string}', async (expectedConfirmationMessage) => {
    await new Purchase(getPage()).validateOrderConfirmationMessage(expectedConfirmationMessage);
});

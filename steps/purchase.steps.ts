import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will add the backpack to the cart', async () => {
  await new Purchase(getPage()).addBackPackToCart();
});

// Step definition for selecting the cart button
Then('I will select the cart button', async () => {
  await new Purchase(getPage()).selectCart();
});

// Step definition for selecting the checkout button
Then('I will select the checkout button', async () => {
  await new Purchase(getPage()).selectCheckout();
});

// Step definition for filling the checkout form
Then('I will fill in the checkout form with {string}, {string}, and {string}', async (firstName, lastName, zip) => {
  await new Purchase(getPage()).fillCheckoutForm(firstName, lastName, zip);
});

// Step definitions for continuing and finishing the checkout process
Then('I will select the continue button', async () => {
  await new Purchase(getPage()).selectContinue();
});

// Step definition for selecting the finish button
Then('I will select the finish button', async () => {
  await new Purchase(getPage()).selectFinish();
});

// Step definition for validating the order text
Then('I should see the text {string}', async (expectedText) => {
  await new Purchase(getPage()).validateOrderText(expectedText);
});
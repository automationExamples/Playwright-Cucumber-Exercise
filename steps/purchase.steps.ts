import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

// Add Then clause to add the backpack to the cart
Then('I will add the backpack to the cart', async () => {
  await new Purchase(getPage()).addBackPackToCart();
});

// Add Then clause to validate badge number on cart
Then('I will validate the badge number on the cart', async () => {
  await new Purchase(getPage()).validateBadgeNumber();
});

// Add Then clause to click on the cart
Then('I will click on the cart', async () => {
  await new Purchase(getPage()).clickCart();
});

// Add Then clause to click on the checkout button
Then('I will click on the checkout button', async () => {
  await new Purchase(getPage()).clickCheckout();
})

// Add Then clause to fill in the details
Then('I will fill in the details {string} {string} {string}', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).enterDetails(firstName, lastName, postalCode);
})

// Add Then clause to click on the continue button
Then('I will click on the continue button', async () => {
  await new Purchase(getPage()).clickContinue();
})

// Add Then clause to click on the finish button
Then('I will click on the finish button', async () => {
  await new Purchase(getPage()).clickFinish();
})

// Add Then clause to validate the message
Then('I should see the message {string}', async (expectedHeader) => {
  await new Purchase(getPage()).validateCompleteHeader(expectedHeader);
})
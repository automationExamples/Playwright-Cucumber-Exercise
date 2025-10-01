import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { expect } from '@playwright/test';

Then('I will open the cart', async function () {
  await getPage().click('.shopping_cart_link');
});

Then('I will proceed to checkout', async function () {
  await getPage().click('[data-test="checkout"]');
});

Then('I will enter user details: {string}, {string}, {string}', async function (firstName, lastName, zip) {
  await getPage().fill('[data-test="firstName"]', firstName);
  await getPage().fill('[data-test="lastName"]', lastName);
  await getPage().fill('[data-test="postalCode"]', zip);
});

Then('I will continue to the overview page', async function () {
  await getPage().click('[data-test="continue"]');
});

Then('I will finish the purchase', async function () {
  await getPage().click('[data-test="finish"]');
});

Then('I should see the confirmation message {string}', async function (expectedMessage) {
  const actualMessage = await getPage().textContent('.complete-header');
  expect(actualMessage?.trim()).toBe(expectedMessage);
});
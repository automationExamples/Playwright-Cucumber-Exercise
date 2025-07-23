import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { expect, Page } from '@playwright/test';


Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('the error message should be {string}', async function (expectedMessage) {
  const errorLocator = await new Login(getPage()).getErrorMessage();
   // Wait until visible
  await errorLocator.waitFor({ state: 'visible', timeout: 5000 });
  const actualMessage = await errorLocator.textContent();
  expect(actualMessage?.trim()).toBe(expectedMessage);
});

Then('I should see the title header as {string}', async (product) => {
  const productHeader = await new Login(getPage()).getProductsHeader();
  await productHeader.waitFor({ state: 'visible', timeout: 5000 });
  const actualMessage = await productHeader.textContent();
  expect(actualMessage?.trim()).toBe(product);
});

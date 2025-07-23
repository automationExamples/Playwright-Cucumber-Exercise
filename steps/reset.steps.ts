import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Reset } from '../pages/reset.page';
import { expect } from '@playwright/test';


Then('I will verify the {string} is added to cart', async (itemName) => {
  const item = (await new Reset(getPage()).getCartItems()).textContent();
  const item1 = await item;
  expect(item1).toBe(itemName);
});


Then('I will click on Continue Shoppig button', async () => {
  const continueShoppingButton = (await new Reset(getPage()).getContinueShoppingElement());
  await continueShoppingButton.waitFor({ state: 'visible' }); 
  await expect(continueShoppingButton).toBeEnabled();         
  await continueShoppingButton.click();
});

Then('I will click on the Menu action bar', async () => {
  const menuButton = (await new Reset(getPage()).getMenuButton());
  await menuButton.waitFor({ state: 'visible' }); 
  await expect(menuButton).toBeEnabled();         
  await menuButton.click();
});

Then('I will click on Reset App State option', async () => {
  const resetApp = (await new Reset(getPage()).getResetAppState());
  await resetApp.waitFor({ state: 'visible' }); 
  await expect(resetApp).toBeEnabled();         
  await resetApp.click();
});

Then('I should see the cart is empty', async () => {
  const countElement = (await new Reset(getPage()).getCartCount()).count();
  const count = await countElement;
  expect(count).toBe(0)

});



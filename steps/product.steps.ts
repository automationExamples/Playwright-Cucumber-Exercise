import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { expect } from '@playwright/test';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort products by price {string}', async (order) => {
  await new Product(getPage()).sortByPrice(order);

  Then('the products should be sorted by price {string}', async (order) => {
    const prices = await new Product(getPage()).getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => order === 'asc' ? a - b : b - a);
    expect(prices).toEqual(sortedPrices);
  });
  
  When('I select the cart', async () => {
    await getPage().click('.shopping_cart_link');
  });
  
  When('I select Checkout', async () => {
    await getPage().click('button[id="checkout"]');
  });
  
  When('I fill in the First Name, Last Name, and Zip/Postal Code', async () => {
    await getPage().fill('input[id="first-name"]', 'Testname');
    await getPage().fill('input[id="last-name"]', 'TestLastName');
    await getPage().fill('input[id="postal-code"]', '12345');
  });
  
  When('I select Continue', async () => {
    await getPage().click('input[id="continue"]');
  });
  
});

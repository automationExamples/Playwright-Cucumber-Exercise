import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import assert from 'assert';


Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});


When('I sort the items by {string}', async (sortOption: string) => {
  const product = new Product(getPage());
  await product.sortProductsBy(sortOption);

  // Ждем, пока первый товар обновится (можно ожидать любого индикатора)
  await getPage().locator('.inventory_item_price').first().waitFor({ state: 'visible', timeout: 5000 });
});


Then('I validate all 6 items are sorted correctly by price {string}', async (direction: string) => {
  const product = new Product(getPage());
  const prices = await product.getProductPrices();

  
  const sortedPrices = [...prices].sort((a, b) => direction === 'ascending' ? a - b : b - a);

  assert.deepStrictEqual(prices, sortedPrices, `Products are not sorted ${direction}`);
});

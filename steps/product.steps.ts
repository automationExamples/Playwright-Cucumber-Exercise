import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});
Then('I will sort products by {string}', async (sortOption) => {
  await new Product(getPage()).sortBy(sortOption);
});
 
Then('I will validate products are sorted by price {string}', async (sortOption) => {
  const product = new Product(getPage());
  const prices = await product.getAllPrices();
  // Compute expected order
  const asc = Array.from(prices).slice().sort((a,b)=>a-b);
  const expected = sortOption === 'Price (high to low)' ? asc.slice().reverse() : asc;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] !== expected[i]) {
      throw new Error(`Products are not sorted by ${sortOption}. Found ${prices.join(', ')}; expected ${expected.join(', ')}`);
    }
  }
});
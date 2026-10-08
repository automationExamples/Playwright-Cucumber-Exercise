import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart()
})
When('I sort the products by {string}', async (sortOption) => {
    await new Product(getPage()).sortProductsBy(sortOption)
})

Then('the product prices should be sorted in {string} order', async (order) => {
    await new Product(getPage()).validatePricesSorted(order)
})
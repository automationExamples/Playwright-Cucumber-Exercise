import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Purchase } from '../pages/purchase.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I sort products by {string}', async (sortOrder: string) => {
  await new Product(getPage()).sortProductsBy(sortOrder);
});

Then('I should see all products are sorted correctly by {string}', async (sortOrder: string) => {
  await new Product(getPage()).validateProductsSortedBy(sortOrder);
});

Then('I sort products by Price \\(low to high\\)', async () => {
  await new Product(getPage()).sortProductsBy('Price (low to high)');
});

Then('I sort products by Price \\(high to low\\)', async () => {
  await new Product(getPage()).sortProductsBy('Price (high to low)');
});

Then('I should see all products are sorted correctly by Price \\(low to high\\)', async () => {
  await new Product(getPage()).validateProductsSortedBy('Price (low to high)');
});

Then('I should see all products are sorted correctly by Price \\(high to low\\)', async () => {
  await new Product(getPage()).validateProductsSortedBy('Price (high to low)');
});

Then('Select the cart (top-right)', async () => {
  await new Purchase(getPage()).selectCart();
})
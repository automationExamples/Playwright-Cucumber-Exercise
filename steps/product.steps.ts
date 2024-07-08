import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

         Then('Sort the items by {string}',async function (string) {
          await new Product(getPage()).selectOption(string)
        });

         Then('Validate all {int} items are sorted correctly by price',async function (int) {
          const flag = await new Product(getPage()).verifyOrderLowToHigh(int)
         });
import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

// Then('I sort the items by {string}',{timeout:6000}, async(sortBy: string) => {
  
//   await new Product(getPage()).clickDropDownAndValidateSort(sortBy);
// })


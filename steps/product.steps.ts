
import { Then,When} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});
Then('I will add the {string} to the cart', async (itemName) => {
  await new Product(getPage()).addItemToCart(itemName);
});

When('I sort the items by {string}', async (sortOption: string) => {
  await new Product(getPage()).sortItemsBy(sortOption);
});


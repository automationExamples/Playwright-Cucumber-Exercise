import { Then, When } from '@cucumber/cucumber';
import { getPage } from "../playwrightUtilities"
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async (): Promise<void> => {
  try {
    await new Product(getPage()).addBackPackToCart();
  } catch (err) {
    console.error('Failed to add the backpack to the cart', err)
    throw err
  }
});

When('I sort the items by {string}', async (sortOption: string): Promise<void> => {
  try {
    await new Product(getPage()).sortItems(sortOption)
  } catch (err) {
    console.error('Failed to sort items by option:', sortOption, err)
    throw err
  }
});

Then('I validate all 6 items are sorted correctly by price in {string} order', async (sortOrder: string): Promise<void> => {
  try {
    await new Product(getPage()).verifySortItemsByPrice(sortOrder);
  } catch (err) {
    console.error('Failed to validate sorted items for order:', sortOrder, err)
    throw err
  }
});
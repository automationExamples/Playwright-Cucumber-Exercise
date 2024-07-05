import { Given, When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import assert from 'assert';


Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort the items by {string}', async (sortOption: string) => {
  await new Product(getPage()).sortItemsBy(sortOption);
});

Then('I verify the items are sorted by {string}', async (sortType: string) => {
  const productPage = new Product(getPage());
  let sorted = false;

  if (sortType === 'Price (high to low)') {
      sorted = await new Product(getPage()).areItemsSortedByPriceHighToLow();
  } else if (sortType === 'Price (low to high)') {
      sorted = await new Product(getPage()).areItemsSortedByPriceLowToHigh();
  } else if (sortType === 'Name (A to Z)') {
      sorted = await new Product(getPage()).areItemsSortedByNameAToZ();
  } else if (sortType === 'Name (Z to A)') {
      sorted = await new Product(getPage()).areItemsSortedByNameZToA();
  } else {
      throw new Error(`Unsupported sort type: ${sortType}`);
  }

  if (!sorted) {
      throw new Error(`Items are not sorted by ${sortType}`);
  }
});
import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { sortInventoryByNameAtoZ, sortInventoryByNameZtoA, sortInventoryByPriceHighToLow, sortInventoryByPriceLowToHigh } from '../webUtils';
import { assertArrayEquals, assertEquals } from '../assertions';
import { inventoryData } from '../inventoryItems';


Then('I add the {string} to the cart', async function (product) {
  await new Product(getPage()).addItemToCart(product);
});

Then('I Select the cart', async function () {
  await new Product(getPage()).navigateToShoppingCart();
});

Then('I Sort the items by {string}', async function (sortBy) {
  await new Product(getPage()).sortItems(sortBy);
});

Then('I Validate all six items are sorted correctly by {string}', async function (sortOrder) {
  const inventoryDataActual = await new Product(getPage()).inventoryData();
  const inventoryDataExpected = inventoryData.inventoryItems;

  switch (sortOrder) {
    case 'Price (low to high)':
      const sortedInventoryExpected = await sortInventoryByPriceLowToHigh(inventoryDataExpected);
      assertArrayEquals(sortedInventoryExpected, inventoryDataActual);
      break;
    case 'Price (high to low)':
      const sortedInventoryExpected2 = await sortInventoryByPriceHighToLow(inventoryDataExpected);
      assertArrayEquals(sortedInventoryExpected2, inventoryDataActual);
      break;
    case 'Name (A to Z)':
      const sortedInventoryExpected3 = await sortInventoryByNameAtoZ(inventoryDataExpected);
      assertArrayEquals(sortedInventoryExpected3, inventoryDataActual);
      break;
    case 'Name (Z to A)':
      const sortedInventoryExpected4 = await sortInventoryByNameZtoA(inventoryDataExpected);
      assertArrayEquals(sortedInventoryExpected4, inventoryDataActual);
      break;
  }
});

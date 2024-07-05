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
      const sortedInventoryActual = await sortInventoryByPriceLowToHigh(inventoryDataActual);
      const sortedInventoryExpected = await sortInventoryByPriceLowToHigh(inventoryDataExpected);
      assertArrayEquals(sortedInventoryExpected, sortedInventoryActual);
      break;
    case 'Price (high to low)':
      const sortedInventoryActual2 = await sortInventoryByPriceHighToLow(inventoryDataActual);
      const sortedInventoryExpected2 = await sortInventoryByPriceHighToLow(inventoryDataExpected);
      assertArrayEquals(sortedInventoryExpected2, sortedInventoryActual2);
      break;
    case 'Name (A to Z)':
      const sortedInventoryActual3 = await sortInventoryByNameAtoZ(inventoryDataActual);
      const sortedInventoryExpected3 = await sortInventoryByNameAtoZ(inventoryDataExpected);
      assertArrayEquals(sortedInventoryExpected3, sortedInventoryActual3);
      break;
    case 'Name (Z to A)':
      const sortedInventoryActual4 = await sortInventoryByNameZtoA(inventoryDataActual);
      const sortedInventoryExpected4 = await sortInventoryByNameZtoA(inventoryDataExpected);
      assertArrayEquals(sortedInventoryExpected4, sortedInventoryActual4);
      break;
  }
});
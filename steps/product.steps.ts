import {Then, When} from '@cucumber/cucumber';
import {getPage} from '../playwrightUtilities';
import {Product} from '../pages/product.page';
import {expect} from "@playwright/test";


When('I sort the items by {string}', async function (sortOrder: string) {
    await new Product(getPage()).sortItemsBy(sortOrder);
});

Then('I validate all {int} items are sorted correctly by price in {string} order', async function (itemCount: number, sortOrder: string) {
    const productPage = new Product(getPage());
    const prices = await productPage.getItems();

    // Ensure we have the correct number of items
    expect(prices.length).toBe(itemCount);

    // Create a copy of the prices array and sort it based on the sortOrder
    const sortedPrices = [...prices].sort((a, b) =>
        sortOrder === 'Price (high to low)' ? b - a : a - b
    );

    // Compare the actual prices with the sorted prices
    expect(prices).toEqual(sortedPrices);
});
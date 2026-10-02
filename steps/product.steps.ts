import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import {expect} from '@playwright/test';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will select the cart on the top-right', async () => {
    await getPage().locator('[data-test="shopping-cart-link"]').click();
});

Then('I will select Checkout', async() => {
   await getPage().locator('[data-test="checkout"]').click();
});


Then('I will fill in the First Name, Last Name, and Postal Code', async() => {
  const firstName = getPage().locator('[data-test="firstName"]');
  const lastName = getPage().locator('[data-test="lastName"]');
  const zipCode = getPage().locator('[data-test="postalCode"]');

  await firstName.fill('Shawn');
  await lastName.fill('Michaels');
  await zipCode.fill('28208');
});

Then('I will select Continue', async() => {
 await getPage().locator('[data-test="continue"]').click();
});

Then('I will select Finish', async() => {
 await getPage().locator('[data-test="finish"]').click();
});

Then('I should see the text {string}', async(complete) => {
 await expect (getPage().locator('[data-test="complete-header"]')).toHaveText(complete);
});

Then('I will sort the items by {string}', async (sort: string) => {
    await new Product(getPage()).sortItems(sort);
});

Then('I will sort the products by price {string}', async (sort: string) => {
    await new Product(getPage()).sortItems(sort);
});

Then(
    'I will validate all {int} items that are sorted by price',
    async (numberOfItems: number) => {
        const product = new Product(getPage());

        const sort = await getPage()
            .locator('[data-test="product-sort-container"]')
            .inputValue();

        const sortOption =
            sort === 'hilo'
                ? 'Price (high to low)'
                : 'Price (low to high)';

        await product.validateItemsSortedByPrice(
            numberOfItems,
            sortOption
        );
    }
);

Then(
    'I will sort the products by name {string}',
    async (sort: string) => {
        await new Product(getPage()).sortItems(sort);
    }
);

Then(
    'I will validate all {int} items that are sorted by name {string}',
    async (numberOfItems: number, sort: string) => {
        await new Product(getPage()).validateItemsSortedByName(
            numberOfItems,
            sort
        );
    }
);
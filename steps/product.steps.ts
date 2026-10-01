import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
    await new Product(getPage()).addBackPackToCart();
});

When('I sort the items by {string}', async (sort) => {
    await new Product(getPage()).selectSortOption(sort);
});

Then(
    'I validate all 6 items are sorted correctly by price {string}',
    async (direction) => {
        await new Product(getPage()).validatePriceSorting(direction);
    }
);

Then(
    'I validate all 6 items are sorted correctly by name {string}',
    async (direction) => {
        await new Product(getPage()).validateNameSorting(direction);
    }
);
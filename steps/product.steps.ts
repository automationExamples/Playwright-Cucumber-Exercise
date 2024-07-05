import { test, expect } from '@playwright/test';
import { Product } from '../pages/product.page';

test.describe('Product Sorting', () => {
    let productPage: Product;

    test.beforeEach(async ({ page }) => {
        productPage = new Product(page);
        await productPage.loginAsStandardUser(); 
    });

      
    test.afterEach(async () => {
        await productPage.clickOnLogout();
    });

    test('Validate product sort by price', async ({}) => {
        await productPage.sortItemsBy('Price (high to low)');
        await productPage.validateProductOrder([
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Backpack',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Bike Light',
            'Test.allTheThings() T-Shirt (Red)',
            'Sauce Labs Onesie'
        ]);
    });

    test('Validate product sort by name', async ({}) => {
        await productPage.sortItemsBy('Name (A to Z)');
        await productPage.validateProductOrder([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Onesie',
            'Test.allTheThings() T-Shirt (Red)'
        ]);
    });

    test('Validate product sort by ratings', async ({}) => {
        await productPage.sortItemsBy('Ratings (high to low)');
        await productPage.validateProductOrder([
            'Test.allTheThings() T-Shirt (Red)',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Backpack',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Bike Light',
            'Sauce Labs Onesie'
        ]);
    });

    test('Validate product sort by availability', async ({}) => {
        await productPage.sortItemsBy('Availability (in stock first)');
        await productPage.validateProductOrder([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Onesie',
            'Test.allTheThings() T-Shirt (Red)'
        ]);
    });

    test('Validate product sort retains user preferences', async ({}) => {
        await productPage.sortItemsBy('Price (low to high)');
        await productPage.logOutAndLogBackIn();
        await productPage.validateProductOrder([
            'Sauce Labs Onesie',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Test.allTheThings() T-Shirt (Red)',
            'Sauce Labs Backpack',
            'Sauce Labs Fleece Jacket'
        ]);
    });

    test('Validate product sort after adding items to cart', async ({}) => {
        await productPage.addItemToCart();
        await productPage.sortItemsBy('Name (A to Z)');
        await productPage.validateProductOrder([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Onesie',
            'Test.allTheThings() T-Shirt (Red)'
        ]);
        // Validate the first item is still in the cart
        // Implement cart validation logic here
    });
});

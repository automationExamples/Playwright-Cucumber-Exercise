import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page,Locator, ElementHandle, chromium } from "@playwright/test"
import { LoginPage } from '../pages/purchase.page';
import { getPage } from '../playwrightUtilities';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { FinishPage } from '../pages/finish.page';

let page: Page;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let finishPage: FinishPage;


Given ('I open the {string} page', async (url) => {
    const browser= await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    loginPage=new LoginPage(page);
    inventoryPage= new InventoryPage(page);
    cartPage= new CartPage(page);
    checkoutPage=  new CheckoutPage(page);
    finishPage = new FinishPage(page);
    await loginPage.open(url);
});

When ('I will login as {string}', async (userName) => {
    await loginPage.loginAsUser(userName);
});

When ('I add the backpack to the cart', async () => {
    await inventoryPage.addToCart('backpack');
});

When ('I select the cart', async () => {
    await inventoryPage.goToCart();
});

When ('I select checkout', async () => {
    await cartPage.checkout();
});

When ('I fill in the First Name, Last Name, and Zip/Postal Code', async () => {
    await checkoutPage.fillPersonalInfo('vineela','Gundala','45679');
});

When ('I select continue', async () => {
    await checkoutPage.continue();
});

When ('I select Finish', async () => {
    await checkoutPage.finish();
});

Then ('I validate the text {string}', async (expectedText) => {
    const actualText = await finishPage.getOrderConfirmationText();
    expect(actualText).toEqual(expectedText);
    
});
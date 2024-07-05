import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page,Locator, ElementHandle, chromium } from "@playwright/test"
import { LoginPage } from '../pages/purchase.page';
import { getPage } from '../playwrightUtilities';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { FinishPage } from '../pages/finish.page';
import { Product } from '../pages/product.page';


let page: Page;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let finishPage: FinishPage;


//Given ('I open the {string} page', async (url) => {
    
//});
//const browser= await chromium.launch();
  //  const context = await browser.newContext();
    //page = await context.newPage();
    //loginPage=new LoginPage(page);
    //inventoryPage= new InventoryPage(page);
    //cartPage= new CartPage(page);
    //checkoutPage=  new CheckoutPage(page);
    //finishPage = new FinishPage(page);
    //await loginPage.open(url);


//When ('I will login as {string}', async (userName) => {
   
 //   await loginPage.loginAsUser(userName);
//});
//inventoryPage= new InventoryPage(page);



Then('I select the cart', async () => {
    await new LoginPage(getPage()).goToCart();
  });

//When ('I select the cart', async () => {
//    const browser= await chromium.launch();
//    const context = await browser.newContext();
 //    page = await context.newPage();
 //    loginPage=new LoginPage(page);
 //    inventoryPage= new InventoryPage(page);
 //   cartPage= new CartPage(page);
  //  checkoutPage=  new CheckoutPage(page);
  //  finishPage = new FinishPage(page);
 //  await inventoryPage.goToCart();
//});

Then('I add the backpack to the cart', async () => {
    await new Product(getPage()).addBackPackToCart();
  });


When ('I select Checkout', async () => {
    await new CartPage(getPage()).checkout();
   // await cartPage.checkout();
});

Then ('I fill in the First Name, Last Name, and Zip\\/Postal Code', async () => {
    await new CheckoutPage(getPage()).fillPersonalInfo('vineela','Gundala','45679');
});

Then ('I select Continue', async () => {
    await new CheckoutPage(getPage()).continue();
});

When ('I select Finish', async () => {
    await new CheckoutPage(getPage()).finish();
});

Then ('I validate the text {string}', async (expectedText) => {
    const actualText = await new FinishPage(getPage()).getOrderConfirmationText();
    expect(actualText).toEqual(expectedText);
    
});
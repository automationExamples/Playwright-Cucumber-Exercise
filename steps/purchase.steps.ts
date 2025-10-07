import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import {Purchase} from '../pages/purchase.page';

Then('I will add the backpack item to the cart', async function (){
    await new Purchase(getPage()).addBackpackToCart();
}); 

Then('I will click on the cart', async function (){
    await new Purchase(getPage()).clickCart();
});

Then('I will select checkout', async function (){
    await new Purchase(getPage()).clickCheckout();
});
Then('I will fill in the first name, last name, zip_postal code', async function (){
    await new Purchase(getPage()).fillUserInfo();
});
Then('I will select continue', async function (){
    await new Purchase(getPage()).clickContinue();
});
Then('I will select finish', async function (){
    await new Purchase(getPage()).clickFinish();
});
Then('I will validate the thank you message', async function (){
    await new Purchase(getPage()).validateThankYouMessage('Thank you for your order!');
});
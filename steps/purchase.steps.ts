import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will add the backpack to the cart', async () => {
  await new Purchase(getPage()).addBackPackToCart();
});

 Then('Select the cart', async  () => {
  await new Purchase(getPage()).selectCart();
           
});

Then('Select Checkout', async function () {
  await new  Purchase(getPage()).selectCheckout();
    
         });

Then('Fill in the {string}, {string}, and {string}', async function (firstName, lastName, postalCode) {
  await new Purchase(getPage()).enterFirstName(firstName);
  await new Purchase(getPage()).enterLastName(lastName);
  await new Purchase(getPage()).enterZipCode(postalCode);
           
         });

Then('Select Continue', async function () {
  await new Purchase(getPage()).selectContinue();
           
         });

Then('Select Finish', async function () {
   await new Purchase(getPage()).clickFinish();
           
         });
Then('Validate the text {string}', async function (thankYou) {
   await new Purchase(getPage()).verifyThankYou(thankYou);
           
         });
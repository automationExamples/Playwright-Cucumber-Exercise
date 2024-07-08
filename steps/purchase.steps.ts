import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

         Then('Select the cart \\(top-right)',async function () {
           await new Purchase(getPage()).addBackPackToCart()
         });

         Then('Select Checkout', async function () {
           // Write code here that turns the phrase above into concrete actions
           await new Purchase(getPage()).clickCheckoutButton()
         });
       
 
         Then('Fill in the First Name, Last Name, and Zip\\/Poxstal Code', async function () {
            await new Purchase(getPage()).fillFields('test','test','20020')
         });
          
         Then('Select Continue', async function () {
           await new Purchase(getPage()).clickContinue()
         });

         Then('Select Finish', async function () {
            await new Purchase(getPage()).clickFinish()
         });
       
         Then('Validate the text {string}', async function (string) {
           await new Purchase(getPage()).validateThankYouMessage(string)
         });
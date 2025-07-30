//checkout steps added by Madhavi
import { Then } from '@cucumber/cucumber';
import { When} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { checkout } from '../pages/checkout.page';

When('I enter FirstName as {string} and Last Name as {string} and Zip Code as {string}', async function (firstName:string, lastName:string,zipCode:string) {
       
         await new checkout(getPage()).EnterFirstLastNamesZip(firstName,lastName,zipCode);
    });


 Then('I click on {string} button', async (string) => {
       
         await new checkout(getPage()).clickButtonByName(string);
    });

 Then('verify that {string} message is displayed', async (string) => {
       
         await new checkout(getPage()).verifySuccessMsgs(string);
    });   


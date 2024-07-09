import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';
const {expect} = require('@playwright/test')

Then('I will add the backpack to the cart for purchase', async () => {
  await new Purchase(getPage()).addBackPackToCart();
});

Then('I will Select the cart (top-right)', async () => {
  await new Purchase(getPage()).select_Cart();
});

Then('I will Select Checkout', async () => {
  await new Purchase(getPage()).select_Checkout();
});

Then('I will Fill in the First Name', async () => {
  await new Purchase(getPage()).first_Name();
});

Then('I will Fill in the Last Name', async () => {
  await new Purchase(getPage()).last_Name();
});

Then('I will Fill in the Zip/Postal Code', async () => {
  await new Purchase(getPage()).zip_Code();
});

Then('I will enter the firstName {string} lastName {string} and zipCode {string}', async (firstName : string, lastName : string, zipCode : string) => {
  await new Purchase(getPage()).fillInfo(firstName, lastName, zipCode);
});

Then('I will Select Continue', async () => {
  await new Purchase(getPage()).select_Continue();
});

Then('I will Select Finish', async () => {
  await new Purchase(getPage()).select_Finish();
});

Then('I will Validate the confirmation message element {string}', async (expected_message : string) => {
  await new Purchase(getPage()).validate_Text();
  
});

function async(String: StringConstructor, firstName: any, String1: StringConstructor, lastName: any, String2: StringConstructor, zipCode: any): import("@cucumber/cucumber/lib/support_code_library_builder/types").IDefineStepOptions {
  throw new Error('Function not implemented.');
}

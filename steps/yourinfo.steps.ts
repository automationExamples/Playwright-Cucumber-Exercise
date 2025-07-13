import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { YourInfo } from '../pages/yourinfo.page';

Then('Fill in the {string}, {sytring}, and {string}', async (firstName: string, lastName: string, zipCode: string) => {
  await new YourInfo(getPage()).fillInfoAndContinue(firstName, lastName, zipCode);
});

Then('I will click on the continue button', async () => {
  await new YourInfo(getPage()).clickContinueButton();
});


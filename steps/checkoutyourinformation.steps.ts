import { When, Then} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Checkoutyourinformation } from '../pages/checkoutyourinformation.page';



Then('I enter the firstName {string} lastName {string} and postalcode {string}', async (firstName, lastName, postalCode) => {
  await new Checkoutyourinformation(getPage()).enterInformationDetails(firstName, lastName, postalCode);
});

Then('I select continue', async () => {
  await new Checkoutyourinformation(getPage()).clickOnContinue();
});
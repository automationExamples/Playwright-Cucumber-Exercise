import { When, Then} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Yourcart } from '../pages/yourcart.page';


Then('I validate the cart details of {string}', async (productItem) => {
  await new Yourcart(getPage()).verifyCartDetails(productItem);
});


When('I select checkout', async () => {
  await new Yourcart(getPage()).checkout();
});



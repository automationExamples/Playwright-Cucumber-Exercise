import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { YourInfo } from '../pages/yourinfo.page';
import { Yourcart } from '../pages/yourcart.page';

Then('I will click on the checkout button', async () => {
  await new Yourcart(getPage()).clickCheckoutButton();
});


import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Overview } from '../pages/overview.page';


Then('I will click on the finish button', async () => {
  await new Overview(getPage()).clickFinishButton();
});
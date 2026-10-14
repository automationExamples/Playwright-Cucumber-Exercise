import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see a login error containing {string}', async (expectedMsg) => {
  const msg = await new Login(getPage()).getErrorText();
  if (!msg.includes(expectedMsg)) {
    throw new Error(`Expected error to include "${expectedMsg}" but got "${msg}"`);
  }
});

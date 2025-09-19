import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle: string): Promise<void> => {
  try {
    await new Login(getPage()).validateTitle(expectedTitle);
  } catch (err) {
    console.error('Failed to validate title:', expectedTitle, err);
    throw err;
  }
});

Then('I will login as {string}', async (userName: string): Promise<void> => {
  try {
    await new Login(getPage()).loginAsUser(userName);
  } catch (err) {
    console.error('Failed to login as user:', userName, err);
    throw err;
  }
});

Then('validate error message {string}', async (expErrorMsg: string): Promise<void> => {
  try {
    await new Login(getPage()).validateErrorMsg(expErrorMsg);
  } catch (err) {
    console.error('Failed to validate error message:', expErrorMsg, err);
    throw err;
  }
});
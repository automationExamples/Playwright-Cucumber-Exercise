import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then(
  "I should see the login error message {string}",
  async (expectedMessage: string) : Promise<void> => {
    const actual = await new Login(getPage()).getLoginError();
    if (!actual?.includes(expectedMessage)) {
      throw new Error(
        `Expected error to include '${expectedMessage}', but got '${actual}'`
      );
    }
  }
);
import {Given, Then} from '@cucumber/cucumber';
import {getPage} from '../playwrightUtilities';
import {Login} from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle: string) => {
    const page = getPage();
    const login = new Login(page);
    await login.validateTitle(expectedTitle);
});

Then('I will login as {string}', async (username: string) => {
    const page = getPage();
    const login = new Login(page);
    await login.loginAsUser(username);
});

Then('I should see the error message {string}', {timeout: 30 * 1000},async (expectedErrorMessage: string) => {
    const page = getPage();
    const login = new Login(page);
    await login.validateErrorMessage(expectedErrorMessage);
});
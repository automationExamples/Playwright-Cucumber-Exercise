import {Then, When, Given } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

const appUrl = process.env.APP_URL  || 'https://www.saucedemo.com/'

Given('I navigate to sauce demo page', async() => {
  const page = getPage();
  await page.goto(appUrl);
});

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

When('I will validate login error message by using {string}', async(userName) => {
  await new Login(getPage()).loginAsUser(userName)
  await new Login(getPage()).validateErrorMessage();
})

Then('I will login as {string} for purchase', async (userName) => {
await new Login(getPage()).loginAsUser(userName)
});

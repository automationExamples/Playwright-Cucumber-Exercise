import { Given, Then, After } from '@cucumber/cucumber';

Given('I open the {string} page', { timeout: 30000 }, async function (url: string) {
  await this.initializePage();
  await this.page.goto(url);
});

Then('I should see the title {string}', { timeout: 10000 }, async function (expectedTitle: string) {
  const title = await this.page.title();
  if (title !== expectedTitle) {
    throw new Error(`Expected title "${expectedTitle}", but got "${title}"`);
  }
});

// Close browser after each scenario
After(async function () {
  await this.closeBrowser();
});

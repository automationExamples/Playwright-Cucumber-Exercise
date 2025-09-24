import { Given } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import assert from 'assert';

Given('I open the {string} page', async (url) => {
    await getPage().goto(url);
  });

interface CustomWorld {
  page: any;
}

Then('I should see the title {string}', async function (this: CustomWorld, expectedTitle: string) {
  const title = await this.page.title();
  expect(title).toBe(expectedTitle);
});

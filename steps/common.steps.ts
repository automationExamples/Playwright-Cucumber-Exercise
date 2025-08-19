// import { Given } from "@cucumber/cucumber";
// import { getPage } from "../playwrightUtilities";

// Given('I open the {string} page', async (url) => {
//     await getPage().goto(url);
//   });

import { Given } from '@cucumber/cucumber';
import { Page } from '@playwright/test';

type WorldCtx = { page: Page };

Given('I open the {string} page', async function (this: WorldCtx, url: string) {
  await this.page.goto(url);
});
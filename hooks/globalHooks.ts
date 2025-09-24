// globalHooks.ts
import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { initializeBrowser, initializePage, getPage, closeBrowser } from "../playwrightUtilities";
import { CustomWorld } from '../world';

setDefaultTimeout(15000);

Before(async function (this: CustomWorld) {
  await initializeBrowser();
  await initializePage();
  this.page = getPage(); 
});

After(async function () {
  await closeBrowser();
});

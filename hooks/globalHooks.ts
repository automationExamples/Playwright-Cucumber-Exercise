// support/globalHooks.ts
import { Before, After } from "@cucumber/cucumber";
import { initializeBrowser, initializePage, closeBrowser } from "../playwrightUtilities";
import { TestContext } from "../support/TestContext";


Before(async function () {
  await initializeBrowser();
  await initializePage();
  this.context = new TestContext();
});

After(async function (){
  await closeBrowser();
});
import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage } from "../playwrightUtilities";

setDefaultTimeout(15000);

Before(async () => {
  console.log("Running Before hook...");
  await initializeBrowser();
  await initializePage();
  console.log("Browser and page initialized in Before hook.");
});

After(async () => {
  console.log("Running After hook...");
  await closeBrowser();
  console.log("Browser closed in After hook.");
});

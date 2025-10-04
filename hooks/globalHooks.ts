import { AfterAll, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage, closePage } from "../playwrightUtilities";

setDefaultTimeout(30000);

Before(async () => {
    await initializeBrowser();
    await initializePage();
});

After(async () => {
    await closePage();
});

AfterAll(async () => {
    await closeBrowser();
});
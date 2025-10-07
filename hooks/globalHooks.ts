import { AfterAll, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage } from "../playwrightUtilities";

setDefaultTimeout(15000);

Before(async () => {
    await initializeBrowser();
    await initializePage();
});

AfterAll(async () => {
    await closeBrowser();
});
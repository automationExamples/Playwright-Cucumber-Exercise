import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { initializeBrowser, initializePage, closePage } from "../playwrightUtilities";

setDefaultTimeout(30000);

Before(async () => {
    await initializeBrowser();
    await initializePage();
});

After(async () => {
    try {
        await closePage();
    } catch (error) {
        console.log('Error closing page:', error);
    }
});
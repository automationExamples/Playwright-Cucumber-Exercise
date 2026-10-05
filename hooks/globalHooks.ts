import { After, Before, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { closeBrowser, getPage, initializeBrowser, initializePage } from "../playwrightUtilities";

setDefaultTimeout(15000);

Before( async () => {
    await initializeBrowser();
    await initializePage();
})

After( async function (scenario) {
    // Attach a screenshot to the cucumber report when a scenario fails
    if (scenario.result?.status === Status.FAILED) {
        try {
            const screenshot = await getPage().screenshot({ fullPage: true });
            this.attach(screenshot, 'image/png');
        } catch (error) {
            console.warn(`Could not capture failure screenshot: ${error}`);
        }
    }
    await closeBrowser();
})

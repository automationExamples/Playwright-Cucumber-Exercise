import { After, Before, BeforeAll, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage,getPage } from "../playwrightUtilities";
import { Page } from "@playwright/test";
import Log from "../Log";

setDefaultTimeout(15000);

BeforeAll( async () => {
    Log.clearLogs();
})

Before( async (Scenario) => {
    Log.testBegin(Scenario.pickle.name);
    await initializeBrowser();
    await initializePage();
})



After(async function(Scenario) {
    const status = Scenario.result!.status;
    if (status == Status.FAILED){
        Log.testEnd(Scenario.pickle.name, status);
        const page = getPage();
        this.attach(await page.screenshot({ path: `./test-results/screenshots/${Scenario}.png`, fullPage: true }), 'image/png')
    }
    else {
        Log.testEnd(Scenario.pickle.name, status);
    }
    await closeBrowser();
})
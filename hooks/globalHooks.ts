import { After, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage } from "../playwrightUtilities";
import Log from "../Log";

setDefaultTimeout(15000);

BeforeAll( async () => {
    Log.clearLogs();
})

Before( async (scenario) => {
    Log.testBegin(scenario.pickle.name);
    await initializeBrowser();
    await initializePage();
})

After( async (scenario) => {
    await closeBrowser();
    if (scenario.result) {
        const status = scenario.result.status;
        Log.testEnd(scenario.pickle.name, status);
    }
})
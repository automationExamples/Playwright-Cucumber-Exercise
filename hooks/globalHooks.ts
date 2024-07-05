import { After, Before, setDefaultTimeout,Status  } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage } from "../playwrightUtilities";

setDefaultTimeout(30000);

Before( async () => {
    await initializeBrowser();
    await initializePage();
})

After(async function (scenario) {
    if (scenario.result?.status === Status.UNDEFINED) {
      scenario.result.status = Status.PASSED;
    }
    await closeBrowser();
  });
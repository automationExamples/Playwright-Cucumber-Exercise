import { AfterAll, After, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage } from "../playwrightUtilities";

setDefaultTimeout(20000);

BeforeAll(async()=>{
    await initializeBrowser();
})

Before( async () => {
    await initializePage();
})

AfterAll( async () => {
    await closeBrowser();
})
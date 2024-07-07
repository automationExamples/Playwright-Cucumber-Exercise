import { After, Before, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage,getPage } from "../playwrightUtilities";
import { Page } from "@playwright/test";

setDefaultTimeout(15000);
let page: Page;

Before( async () => {
    await initializeBrowser();
    await initializePage();
})



After(async function(Scenario){
    if (Scenario.result!.status == Status.FAILED){
        page =await getPage();
        //const img = await this.attach(await page.screenshot({ path: `./Screenshots/${scenario.pickle.name}.png`, fullPage: true }), "image/png");
        const img = await page.screenshot({ path: `screenshots/${Scenario.pickle.name}.png`, fullPage: true})
        this.attach(img, 'image/png')
    }
    await closeBrowser();
})
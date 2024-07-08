import { Given } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";

Given('I open the common {string} page', async (url) => {
    await getPage().goto(url);
});
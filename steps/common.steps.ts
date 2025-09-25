import { Given } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { testData } from "../data/test-data";

Given('I open the {string} page', async (url) => {
    await getPage().goto(url);
});

// Alternative step using test data
Given('I open the SauceDemo homepage', async () => {
    await getPage().goto(testData.urls.baseUrl);
});
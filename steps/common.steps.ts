import { Given } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";

Given('Open the {string} page', async (url) => {
    await getPage().goto(url);
  });

import { Given } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { goToUrl } from "../webUtils";

Given('I open the {string} page', async (url) => {
    const page = getPage()
    await goToUrl(page, url);
  });
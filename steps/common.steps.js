"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwrightUtilities_1 = require("../playwrightUtilities");
(0, cucumber_1.Given)('I open the {string} page', async (url) => {
    await (0, playwrightUtilities_1.getPage)().goto(url);
});

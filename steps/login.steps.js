"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwrightUtilities_1 = require("../playwrightUtilities");
const login_page_1 = require("../pages/login.page");
(0, cucumber_1.Then)('I should see the title {string}', async (expectedTitle) => {
    await new login_page_1.Login((0, playwrightUtilities_1.getPage)()).validateTitle(expectedTitle);
});
(0, cucumber_1.Then)('I will login as {string}', async (userName) => {
    await new login_page_1.Login((0, playwrightUtilities_1.getPage)()).loginAsUser(userName);
});
(0, cucumber_1.Then)('I will validate the error message received as {string}', async (expectedMessage) => {
    await new login_page_1.Login((0, playwrightUtilities_1.getPage)()).validateLoginError(expectedMessage);
});

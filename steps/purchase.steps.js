"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwrightUtilities_1 = require("../playwrightUtilities");
const purchase_page_1 = require("../pages/purchase.page");
(0, cucumber_1.Then)('I will add the backpack to the cart', async function () {
    await new purchase_page_1.Purchase(this.page).addBackPackToCart();
});
(0, cucumber_1.Then)('Select the cart \\(top-right)', async () => {
    await new purchase_page_1.Purchase((0, playwrightUtilities_1.getPage)()).openCart();
});
(0, cucumber_1.Then)('Select Checkout', async () => {
    await new purchase_page_1.Purchase((0, playwrightUtilities_1.getPage)()).checkout();
});
(0, cucumber_1.Then)('Fill in the First Name {string}, Last Name {string}, and Postal Code {string}', async (first, last, zip) => {
    await new purchase_page_1.Purchase((0, playwrightUtilities_1.getPage)()).fillUserInfo(first, last, zip);
});
(0, cucumber_1.Then)('Select Continue', async () => {
    await new purchase_page_1.Purchase((0, playwrightUtilities_1.getPage)()).continueCheckout();
});
(0, cucumber_1.Then)('Select Finish', async () => {
    await new purchase_page_1.Purchase((0, playwrightUtilities_1.getPage)()).finishCheckout();
});
(0, cucumber_1.Then)('Validate the text {string}', async (expected) => {
    await new purchase_page_1.Purchase((0, playwrightUtilities_1.getPage)()).validateSuccessMessage(expected);
});

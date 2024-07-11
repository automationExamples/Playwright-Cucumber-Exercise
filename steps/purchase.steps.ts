import { Then, DataTable } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I Select the cart', async () => {
    await new Purchase(getPage()).navigateToCart();
})

Then('I Select Checkout', async function () {
    await new Purchase(getPage()).checkout();
});

Then('I fill in the details', async (dataTable: DataTable) => {
    const data = dataTable.rowsHash();

    const firstName = data['First Name'];
    const lastName = data['Last Name'];
    const zipCode = data['Zip Code'];
    
    await new Purchase(getPage()).enterFirstName(firstName);
    await new Purchase(getPage()).enterLastName(lastName);
    await new Purchase(getPage()).enterZipCode(zipCode);
})
    // Write code here that turns the phrase above into concrete actions

Then('I Select Continue', async function () {
    await new Purchase(getPage()).continue();

});

Then('I Select Finish', async function () {
    await new Purchase(getPage()).finish();
});

Then('I Validate the text {string}', async (expectedText: string) => {
    await new Purchase(getPage()).validateText(expectedText);
})

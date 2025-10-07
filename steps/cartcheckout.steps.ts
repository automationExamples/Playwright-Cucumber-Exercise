import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Cartcheckout } from '../pages/cartcheckout.page';



Then('I will login with userid as {string}', async (userName) => {
    await new Login(getPage()).loginAsUser(userName);
});

Then('I will add the bike light to the shopping cart', async () => {
    await new Cartcheckout(getPage()).addBikeLightToCart();
});

Then('I will click on the cart icon', async () => {
    await new Cartcheckout(getPage()).cartIconClick();
});

Then('I will remove the bike light from cart', async () => {
    await new Cartcheckout(getPage()).removeButtonClick();
});

Then('I should see the checkout button disabled', async () => {
    await new Cartcheckout(getPage()).checkoutButtonValidation();
});
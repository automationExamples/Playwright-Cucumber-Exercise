import { Then } from '@cucumber/cucumber';

Then('I will add the backpack to the cart', async function () {
  await this.page.click('#add-to-cart-sauce-labs-backpack');
});

Then('I will proceed to checkout', async function () {
  await this.page.click('#shopping_cart_container');
});

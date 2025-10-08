import { Then,When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I will click the cart', async () => {
  await new Product(getPage()).clickOnCartButton();
});

When('I click on logout', async () => {
  await new Product(getPage()).clickOnLogout();
});

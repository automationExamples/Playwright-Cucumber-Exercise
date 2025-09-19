import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the product to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I purchase the product', async () => {
    await new Product(getPage()).clickPurchase();
});

Then('I should see the purchased text message', async () => {
    await new Product(getPage()).clickFinishButton();
});


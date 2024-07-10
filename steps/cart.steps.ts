import { Then, When} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Cart } from '../pages/cart.page';


When('I select Checkout', async () => {
    await new Cart(getPage()).checkout();
  });
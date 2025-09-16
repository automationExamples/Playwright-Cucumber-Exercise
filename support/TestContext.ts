import { getPage } from "../playwrightUtilities";
import { LoginPage } from "../pages/LoginPage.page";
import { ProductPage } from "../pages/ProductPage.page";
import { CartPage } from "../pages/CartPage.page";
import { CheckoutInformationPage } from "../pages/CheckoutInformationPage.page";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage.page";
import { CheckoutConfirmationPage } from "../pages/CheckoutConfirmationPage.page";


export class TestContext {
  loginPage(): LoginPage {
    return new LoginPage(getPage());
  }

  productPage(): ProductPage {
    return new ProductPage(getPage());
  }

  cartPage(): CartPage {
    return new CartPage(getPage());
  }

  checkoutInformationPage(): CheckoutInformationPage {
    return new CheckoutInformationPage(getPage());
  }

  checkoutOverviewPage(): CheckoutOverviewPage {
    return new CheckoutOverviewPage(getPage());
  }

  checkoutConfirmationPage(): CheckoutConfirmationPage {
    return new CheckoutConfirmationPage(getPage());
  }

  async open(url: string) {
    await getPage().goto(url);
  }
}
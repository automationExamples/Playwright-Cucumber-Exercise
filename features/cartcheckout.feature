Feature: CartCheckout Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate Cart Checkout Button
  Then I will login with userid as 'standard_user'
  Then I will add the bike light to the shopping cart
  Then I will click on the cart icon
  Then I will remove the bike light from cart
  Then I should see the checkout button disabled
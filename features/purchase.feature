Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When I will login as "standard_user"
  When I will add the backpack to the cart
  When I navigate to the cart
  When I proceed to checkout
  When I fill in my billing information
  When I click "Continue"
  When I complete the checkout process
  Then I should see the "Thank you for your order!" message
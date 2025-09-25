Feature: Swag Labs Purchase

  Background:
    Given I open the "https://www.saucedemo.com/" page
    Then I will login as "standard_user"

  Scenario: Validate successful purchase text
    Then I will add the backpack to the cart
    Then I will proceed to checkout

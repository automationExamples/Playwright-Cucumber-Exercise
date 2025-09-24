Feature: Purchase Feature

  Background:
    Given I open the login page "https://www.saucedemo.com/"
    And I login with username "standard_user" and password "secret_sauce"

  Scenario: Validate successful purchase text
    When I add the product "Sauce Labs Backpack" to the cart
    And I go to the cart page
    And I proceed to checkout
    And I provide checkout information "Divya" "Lanka" "12345"
    And I finish the purchase
    Then I should see the confirmation message "Thank you for your order!"

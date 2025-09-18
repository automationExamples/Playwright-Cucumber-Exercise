Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    And I will login as 'standard_user'

  Scenario: Validate successful purchase text
    When I add the backpack to the cart
    And I go to the cart
    And I proceed to checkout
    And I enter checkout details
    And I continue checkout
    And I finish the purchase
    Then I should see the confirmation message "Thank you for your order!"

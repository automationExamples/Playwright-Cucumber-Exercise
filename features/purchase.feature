Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

 Scenario: Validate successful purchase text
    When I login as 'standard_user'
    And I add the backpack to the cart
    And I go to the cart
    And I proceed to checkout
    And I fill in checkout information with "John" "Doe" "12345"
    And I continue checkout
    And I finish checkout
    Then I should see the text "Thank you for your order!"
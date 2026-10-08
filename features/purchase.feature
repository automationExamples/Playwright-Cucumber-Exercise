Feature: Purchase Feature

Background:
    Given I open the "https://www.saucedemo.com/" page

Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    When I open the shopping cart
    And I proceed to checkout
    And I enter my checkout information
    And I continue the checkout
    And I finish the purchase
    Then I should see the purchase confirmation "Thank you for your order!"
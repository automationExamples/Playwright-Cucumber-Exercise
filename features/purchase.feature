Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I will select the cart
    Then I will click checkout
    Then I will fill in the checkout information with 'Moe', 'Al', and '12345'
    Then I will click continue
    Then I will click finish
    Then I should see the confirmation message 'Thank you for your order!'
Feature: Purchase Feature

  Scenario: Validate successful purchase text
    Given I open the "https://www.saucedemo.com/" page
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I go to the cart
    Then I proceed to checkout
    Then I fill checkout info with "Sai","T","19000"
    Then I finish checkout
    Then I should see order success text "Thank you for your order!"

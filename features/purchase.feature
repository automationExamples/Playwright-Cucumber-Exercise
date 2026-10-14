Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    Then I open the cart
    Then I proceed to checkout
    Then I enter checkout info "DeJuan" "Johnson" "48187"
    Then I continue checkout
    Then I finish the order
    Then I should see the purchase thank you message
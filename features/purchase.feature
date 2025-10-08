Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    
Scenario: Validate successful purchase text
  Then I will login as 'standard_user'
  When I add "Sauce Labs Backpack" to the cart
  And I open the cart
  And I proceed to checkout
  And I provide checkout info "John" "Doe" "12345"
  And I complete the purchase
  Then I should see a purchase confirmation "Thank you for your order!"
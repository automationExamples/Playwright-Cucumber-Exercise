Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I should go to the cart
  Then I should proceed to checkout
  Then I should enter user details "firstname" "lastname" "zip-code"
  Then I should finish the purchase
  Then I should see the success message "Thank you for your order!"
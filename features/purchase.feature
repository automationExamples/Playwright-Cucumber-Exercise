Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I select the cart from the top-right corner
  Then I perform checkout
  Then I enter in the First Name, Last Name, Zip and Postal Code
  When I select continue
  Then I select finish
  Then I should see the text "Thank you for your order!"
Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  When I select the cart (top-right)
  Then I select Checkout
  When I fill in the 'Tester', 'Extraordinaire', and '90210'
  Then I select Continue
  When I select Finish
  Then I validate the text 'Thank you for your order!'
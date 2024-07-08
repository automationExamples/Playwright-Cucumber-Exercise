Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then Select the cart (top-right)
  And Select Checkout
  Then Fill in the First Name, Last Name, and Zip/Poxstal Code
  Then Select Continue
  And Select Finish
  Then Validate the text 'Thank you for your order!'
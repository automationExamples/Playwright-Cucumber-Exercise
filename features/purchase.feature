Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then Select the cart (top-right)
  Then Select Checkout
  Then Fill in the name 'Swathi', 'Kaluri', and Zip/Postal Code '635105'
  Then Select Continue
  Then Select Finish
  Then Validate the text 'Thank you for your order!'
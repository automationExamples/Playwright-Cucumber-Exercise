Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    # TODO: Select the cart (top-right)
  Then Select the cart
    # TODO: Select Checkout
  Then Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then Fill in the 'Test', 'Purchase', and '27502'
    # TODO: Select Continue
  Then Select Continue
    # TODO: Select Finish
  Then Select Finish
    # TODO: Validate the text 'Thank you for your order!'
  Then Validate the text 'Thank you for your order!'
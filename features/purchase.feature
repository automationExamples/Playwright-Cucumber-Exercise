Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
     Then Select the cart (top-right)
      Then Select Checkout
      Then Fill in the name 'Sruthi', 'Chappidi', and Zip/Postal Code '75063'
      Then Select Continue
      Then Select Finish
      Then Validate the text 'Thank you for your order!'
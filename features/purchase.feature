Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  When I add the backpack to the cart
  When I select the cart
  When I select Checkout
  Then I fill in the First Name, Last Name, and Zip/Postal Code
  Then I select Continue
  Then I select Finish
  Then I validate the text 'Thank you for your order!'

    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
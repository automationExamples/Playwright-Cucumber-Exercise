Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  And I add the backpack to the cart
  And I select the cart
  And I Select Checkout
  And I fill in the First Name, Last Name, and Zip/Postal Code
  And I select Continue
  And I select Finish
  Then I validate the text 'Thank you for your order!'

    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
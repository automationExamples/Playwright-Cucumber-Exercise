Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    # TODO: Select the cart (top-right)
  Then Select the cart on top right corner
    # TODO: Select Checkout
  Then Check out the cart items
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then Enter your 'FirstName' 'LastName' and 'Zip or Postal Code'
    # TODO: Select Continue
  Then Click on Continue button
    # TODO: Select Finish
  Then Select Finish button
    # TODO: Validate the text 'Thank you for your order!'
  Then Validate the text 'Thank you for your order!'
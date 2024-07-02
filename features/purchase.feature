Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then Select the cart (top-right)
   Then Select Checkout
   Then Fill in the firstname as 'John' lastname as 'kolad' and postcode as '453324'
   Then Select Continue
   Then Select Finish
   Then Validate the text 'Thank you for your order!'
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
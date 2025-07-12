Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    # TODO: Select the cart (top-right)
  Then I will click cart
    # TODO: Select Checkout
  Then I will click check out
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then I will fill out the details
    # TODO: Select Continue
  Then I will click continue
    # TODO: Select Finish
  Then I will click finish
    # TODO: Validate the text 'Thank you for your order!'
  Then I should see a message 'Thank you for your order!'

  
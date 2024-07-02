Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    # TODO: Select the cart (top-right)
  Then I will click on the cart icon
    # TODO: Select Checkout
  Then I will click on the checkout button
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then I will fill in my shipping information
    # TODO: Select Continue
    # TODO: Select Finish
  Then I will confirm my purchase
    # TODO: Validate the text 'Thank you for your order!'
  Then I should see the message "Thank you for your order!"
Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I will go to cart
  Then I will proceed to Checkout
  Then I will fill Checkout information with "Raja" and "Sekhar" and "12345"
  Then I will continue to overview
  Then I will finish the order
  Then I should see success message "Thank you for your order!"
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
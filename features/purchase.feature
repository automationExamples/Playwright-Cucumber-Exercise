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

    Then I open the shopping cart
    Then I proceed to checkout
    Then I enter checkout information: first name "Senia", last name "Chap", postal code "28212"
    Then I continue to the checkout overview
    Then I complete the purchase
    Then I should see the order confirmation message "Thank you for your order!"
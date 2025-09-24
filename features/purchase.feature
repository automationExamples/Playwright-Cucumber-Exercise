Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    # TODO: Select the cart (top-right)
    Then I select the cart
    # TODO: Select Checkout
    Then I select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    Then I fill checkout info with "John" "Doe" "12345"
    # TODO: Select Continue
    Then I select Continue
    # TODO: Select Finish
    Then I select Finish
    # TODO: Validate the text 'Thank you for your order!'
    Then I should see the purchase confirmation "Thank you for your order!"
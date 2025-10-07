Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart for purchase
    Then I select the cart
    Then I select checkout
    Then I fill in the first name "John", last name "Doe", and postal code "12345"
    Then I select continue
    Then I select finish
    Then I should see the text 'Thank you for your order!'
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
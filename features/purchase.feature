Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    When I will login as 'standard_user'
    And I will add the backpack to the cart
      # TODO: Click the cart icon in the top-right corner
    And I go to the cart page
      # TODO: Click the Checkout button
    And I start the checkout process
      # TODO: Enter First Name, Last Name, and Zip/Postal Code
    And I provide my billing details
      # TODO: Click the Continue button
    And I continue to the next step
      # TODO: Click the Finish button
    And I finalize the checkout
      # TODO: Check for the confirmation message 'Thank you for your order!'
    Then I should see the message 'Thank you for your order!'
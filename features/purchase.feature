Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    When Select the cart (top-right)
    And Select Checkout
    And Fill in the First Name, Last Name, and Zip/Postal Code
    And Select Continue
    And Select Finish
     # Validation step
    Then Validate the text 'Thank you for your order!'

  Scenario: Purchase with empty cart
    Given I will login as 'standard_user'
    When I proceed to checkout with an empty cart
    Then I should see an error message stating "Your cart is empty"

  Scenario: Purchase with incorrect shipping details
    Given I will login as 'standard_user'
    When I will add the backpack to the cart
    And I fill in incorrect shipping details
    And I proceed to checkout
    Then I should see an error message indicating the issue with shipping details

  Scenario: Cancel purchase before completing
    Given I will login as 'standard_user'
    When I will add the backpack to the cart
    And I fill in valid shipping details
    And I proceed to checkout
    And I click on Cancel during the checkout process
    Then I should return to the cart page

  Scenario: Purchase with different payment methods
    Given I will login as 'standard_user'
    When I will add the backpack to the cart
    And I fill in valid shipping details
    And I proceed to checkout
    And I select payment method as "Credit Card"
    And I complete the purchase
    Then I should see the success message "Thank you for your order!"

  Scenario: Purchase of multiple items
    Given I will login as 'standard_user'
    When I will add multiple items to the cart
    And I fill in valid shipping details
    And I proceed to checkout
    And I complete the purchase
    Then I should see the success message "Thank you for your order!"

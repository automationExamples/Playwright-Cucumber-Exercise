Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I select the cart
    Then I select Checkout
    Then I fill in the First Name Last Name and Zip Code
    Then I select Continue
    Then I select Finish
    Then I should validate the text 'Thank you for your order!'
Feature: Purchase Feature

  Background:
    Given I open the common "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I select the cart
    Then I select Checkout
    Then I fill in the First Name as 'John', Last Name as 'Doe', and Zip/Postal Code as '12345'
    Then I select Continue
    Then I select Finish
    Then I validate the text 'Thank you for your order!'
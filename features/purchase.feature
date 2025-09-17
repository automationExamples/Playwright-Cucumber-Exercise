Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    And I will add the backpack to the cart

    And I will Select the cart (top-right)
    And I will Select Checkout
    And I will Fill in the First Name, Last Name, and Zip/Postal Code
    And I will Select Continue
    And I will Select Finish
    And Validate the text 'Thank you for your order!'
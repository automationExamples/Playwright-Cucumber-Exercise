Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    And I select the cart
     And Select Checkout
     And Fill in the First Name, Last Name, and Zip Code
     And Select Continue
     And Select Finish
     And Validate the text 'Thank you for your order!'
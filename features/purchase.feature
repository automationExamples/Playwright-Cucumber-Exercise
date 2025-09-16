Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    When I login as 'standard_user'
    And I add the 'Sauce Labs Backpack' to the cart
    And I click the Cart icon
    And I click Checkout
    And I type 'first-name', 'last-name', and '27708' into their respective fields
    And I click Continue
    And I click Finish
    Then I should see the confirmation text 'Thank you for your order!'
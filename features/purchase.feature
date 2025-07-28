Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    And I will add the backpack to the cart
    And I go to the cart
    And I go to checkout
    And I fill in the form details
    And I select Finish
    Then I validate the text 'Thank you for your order!'
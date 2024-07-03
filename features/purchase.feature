Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When I will login as 'standard_user'
  Then I will add the backpack to the cart
    And I will click on the cart icon
    And I click on checkout
    And I enter the firstName "Jyothi" lastName "Ran" and zipCode "27560"
    And I select continue
    And I select finish
    Then I see the order confirmation message "Thank you for your order!"
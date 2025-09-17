Feature: Additional Test Coverage

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate login with empty credentials
    When I click login button without entering credentials
    Then I should see error message "Epic sadface: Username is required"

  Scenario: Validate cart functionality
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I will go to cart
    Then I should see backpack in cart
    Then I will remove backpack from cart
    Then I should see empty cart

  Scenario: Validate logout functionality
    Then I will login as 'standard_user'
    Then I will logout
    Then I should be on login page
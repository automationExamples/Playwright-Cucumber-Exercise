Feature: User Management Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful logout
    Then I will login as 'standard_user'
    Then I will open the hamburger menu
    Then I will select logout
    Then I should be redirected to the login page

  Scenario: Validate cart persistence after login
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I will logout and login again as 'standard_user'
    Then I should see the cart still contains items
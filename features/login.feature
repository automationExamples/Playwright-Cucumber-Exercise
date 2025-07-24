Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Then I should see the title "Swag Labs"

  Scenario: Validate successful login functionality
    When I will login as 'standard_user'
    Then I should be redirected to the products page

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    # TODO: Add a step to validate the error message received
    Then I should see the error msg on login page 'Epic sadface: Sorry, this user has been locked out.'

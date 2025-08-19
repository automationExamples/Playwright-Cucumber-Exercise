Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # Changed Labs Swag to Swag Labs 
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    # Added step in login.steps.ts to check for the error message
    # Added step to validate the error message
    And I should see the error message "Epic sadface: Sorry, this user has been locked out."
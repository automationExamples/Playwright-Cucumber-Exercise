Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    # Question 1: Fixed the title 
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    # TODO: Add a step to validate the error message received
    # Question 2: Added step for error message validation 
    Then I should see error message 'Epic sadface: Username and password do not match any user in this service'
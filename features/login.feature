Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    When I login as 'locked_out_user'
    Then error message "Epic sadface: Sorry, this user has been locked out." is received
    # TODO: Add a step to validate the error message received
Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    When I will login as 'locked_out_user'
    Then I should see an error message 'Epic sadface: Sorry, this user has been locked out.'
    # TODO: Add a step to validate the error message received
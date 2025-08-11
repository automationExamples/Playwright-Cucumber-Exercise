Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Then I should see the title "Swag Labs"


  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    # TODO: Add a step to validate the error message received

  Scenario: Validate login error message
  Given I open the "https://www.saucedemo.com/" page
  Then I will login as 'locked_out_user'
  Then I should see a login error containing "Epic sadface"

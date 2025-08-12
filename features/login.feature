Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Scenario: Validate the login page title
  #   # TODO: Fix this failing scenario
  #   Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    And I receive the message "Epic sadface: Sorry, this user has been locked out."
    # TODO: Add a step to validate the error message received

    Scenario Outline: Scenario Outline name: Validate mutiple login error message
    Then I will login as '<user>'
    And I receive the message "<error Message>"
    # TODO: Add a step to validate the error message received
    Examples:
    |user|error Message|
    |invalidUser|Epic sadface: Username and password do not match any user in this service|
    ||Epic sadface: Username is required|
   
Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # Assertion failed on wrong string value
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message with locked user
    Then I will login as 'locked_out_user'
    # Validating locked out user error message
    And I should see an error message with 'Epic sadface: Sorry, this user has been locked out.'

  Scenario: Validate login error message with no password
    Then I will login as 'invalid_user'
    And I should see an error message with 'Epic sadface: Username and password do not match any user in this service'

Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as '<username>'
    Then I should see an error message '<errMessage>'

    Examples:
    | username | errMessage |
    |locked_out_user | Epic sadface: Sorry, this user has been locked out. |
    |error | Epic sadface: Username and password do not match any user in this service |

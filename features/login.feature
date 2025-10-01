Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    Then I should see the title "Swag Labs"

  Scenario Outline: Validate login error message
    When I login as "<user>"
    Then I should see an error message "<message>"
    Examples:
      | user            | message                                                                   |
      | locked_out_user | Epic sadface: Sorry, this user has been locked out.                       |
      | incorrect_user  | Epic sadface: Username and password do not match any user in this service |
      |                 | Epic sadface: Username is required                                        |
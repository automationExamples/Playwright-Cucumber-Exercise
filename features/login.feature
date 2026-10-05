Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Validate successful login lands on the products page
    Then I will login as 'standard_user'
    Then I should see the page header "Products"

  Scenario Outline: Validate login error message for invalid credentials: <case>
    When I login with username "<username>" and password "<password>"
    Then I should see the error message "<error>"
    Examples:
      | case               | username      | password       | error                                                                      |
      | missing username   |               | secret_sauce   | Epic sadface: Username is required                                         |
      | missing password   | standard_user |                | Epic sadface: Password is required                                         |
      | wrong password     | standard_user | wrong_password | Epic sadface: Username and password do not match any user in this service |
      | unknown username   | not_a_user    | secret_sauce   | Epic sadface: Username and password do not match any user in this service |

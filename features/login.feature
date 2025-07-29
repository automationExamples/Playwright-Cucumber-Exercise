Feature: Login Feature

  Scenario: Validate the login page title
    Given I open the "https://www.saucedemo.com/" page
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Given I open the "https://www.saucedemo.com/" page
    When I try to login as 'locked_out_user'
    Then I should see error message "Epic sadface: Sorry, this user has been locked out."

   Scenario: Validate login error message with invalid credentials
    Given I open the "https://www.saucedemo.com/" page
    When I try to login as 'invalid_user'
    Then I should see error message "Epic sadface: Username and password do not match any user in this service"  
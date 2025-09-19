Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    And I initialize the login page

  Scenario: Validate the login page title
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    When I try to login as 'locked_out_user'
    Then I should see error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Validate login error message with invalid credentials
    When I try to login as 'invalid_user'
    Then I should see error message "Epic sadface: Username and password do not match any user in this service"

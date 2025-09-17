Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
   # Fixed: Correct title is "Swag Labs"
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
     # Added step to validate error message
    Then I should see error message "Epic sadface: Sorry, this user has been locked out."
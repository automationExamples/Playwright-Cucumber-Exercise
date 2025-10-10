Feature: Swag Labs Login

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    Then I should see the title "Swag Labs"

  Scenario: Validate login with locked_out_user
    When I login as "locked_out_user" with password "secret_sauce"
    Then I should see the login error message

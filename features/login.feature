Feature: Login feature

  Scenario: Validate the login page title
    Given I open the login page
    Then the page title should be "Swag Labs"

  Scenario: Validate login error message
    Given I open the login page
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see error message "Epic sadface: Sorry, this user has been locked out."

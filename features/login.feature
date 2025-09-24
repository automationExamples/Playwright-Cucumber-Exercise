Feature: Login Feature

  Scenario: Validate the login page title
    Given I open the login page "https://www.saucedemo.com/"
    Then the page title should be "Swag Labs"

  Scenario: Validate login error message
    Given I open the login page "https://www.saucedemo.com/"
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should remain on the login page
    And I should see the error message "Epic sadface: Sorry, this user has been locked out."

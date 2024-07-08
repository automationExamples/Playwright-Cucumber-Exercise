Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    #title is incorrect
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'

    #Adding error message validation
    And Verify the Error message "Epic sadface: Sorry, this user has been locked out."

    
  
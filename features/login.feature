Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    # comment by MADHAVI::  As per cucumber HTML report, the failure reason is expected 
      ## Error: Expected title to be Labs Swag but found Swag Labs, hence updated following statement
   # Then I should see the title "Labs Swag"
   Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    # TODO: Add a step to validate the error message received
    # comment by Madhavi :: Error message added below 
    Then verify that error_message "Epic sadface: Sorry, this user has been locked out." is displayed
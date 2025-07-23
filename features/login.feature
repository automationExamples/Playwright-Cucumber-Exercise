Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Then I should see the title "Swag Labs"

  #New Scenario 1
  Scenario: Validate the login success 
    Then I will login as 'standard_user'
    Then I should see the title header as 'Products'

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    # TODO: Add a step to validate the error message received
    Then the error message should be "Epic sadface: Sorry, this user has been locked out."
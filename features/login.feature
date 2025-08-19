# Feature: Login Feature

  # Background:
  #   Given I open the "https://www.saucedemo.com/" page

  # Scenario: Validate the login page title
  #   # TODO: Fix this failing scenario
  #   Then I should see the title "Labs Swag"

  # Scenario: Validate login error message
  #   Then I will login as 'locked_out_user'
  #   # TODO: Add a step to validate the error message received
Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    And I should see a login error "Epic sadface: Sorry, this user has been locked out."
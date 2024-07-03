#@Author:Vijay Penumatsha
Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Then I should see the title "Swag Labs "

  Scenario: Validate login error message
    When The User able to enter Username 'username'
    Then The User is able to Click on Login button
    And The User able to verify the Password is required Error Message "Epic sadface: Password is required"
    # TODO: Add a step to validate the error message received
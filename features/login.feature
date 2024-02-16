Feature: Login Feature

  Background:
    Given Open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    Then Should see the title "Swag Labs"

  Scenario: Validate login error message
    When User login as 'locked_out_user'
    Then Display error message as "Epic sadface: Sorry, this user has been locked out."

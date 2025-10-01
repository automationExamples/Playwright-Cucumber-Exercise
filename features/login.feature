Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    Then I should see the title "Swag Labs"


  Scenario: Validate login error message
  Given I open the "https://www.saucedemo.com/" page
  Then I will login as 'locked_out_user'
  And I should see the error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart

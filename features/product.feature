Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    Then I will login as 'standard_user'

  Scenario Outline: Validate product sort by price "<sort>"
    When I sort the items by "<sort>"
    Then I should see all products sorted by "<sort>"

  Examples:
    | sort                |
    | Price (low to high) |
    | Price (high to low) |

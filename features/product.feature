Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    Then I will login as 'standard_user'

  Scenario Outline: Validate product sort by price <sort>
    When I sort the products by "<sort>"
    Then the products should be displayed in correct order by price

  Examples:
    | sort           |
    | Price (low to high) |
    | Price (high to low) |

Feature: Product Feature

Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    And I will login as 'standard_user'

  Scenario Outline: Validate product sort by price <sort>
    When I will Sort the items by '<sort>'
    Then I should see all 6 items sorted by price in "<order>"

  Examples:
    | sort                | order      |
    | Price (low to high) | ascending |
    | Price (high to low) | descending |

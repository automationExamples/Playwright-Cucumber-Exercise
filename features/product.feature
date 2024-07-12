Feature: Product Feature

  Background:
    Given I open the common "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    And I sort the items by '<sort>'
    Then I validate all 6 items are sorted correctly by price in '<sort>' order
    Examples:
      | sort                |
      | Price (high to low) |
      | Price (low to high) |
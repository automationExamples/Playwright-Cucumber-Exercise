Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate product sort by price <sort>
    Then I will login as 'standard_user'
    # TODO: Sort the items by <sort>
    # TODO: Validate all 6 items are sorted correctly by price
    Then Sort the items by <sortOption>
    Then Validate all 6 items are sorted correctly by price
  Examples:
    | sortOption      |
    | Price (low to high) |
    | Price (high to low) |
    
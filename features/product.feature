Feature: Product feature

  Background:
    Given I am logged in as a standard user

  Scenario Outline: Validate product sort by <sortType>
    When I sort items by "<sortType>"
    Then all items should be sorted correctly by "<sortType>"

    Examples:
      | sortType     |
      | Price (low to high) |
      | Price (high to low) |

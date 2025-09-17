Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Validate product sorts (price and name) using a single Scenario Outline
  Scenario Outline: Validate product sort order for <sort>
    Then I will login as 'standard_user'

    And Sort the items by <sort>
    And Validate all '6' items are sorted correctly by <type>

    Examples:
      | sort                  | type  |
      | "Price (low to high)" | price |
      | "Price (high to low)" | price |
      | "Name (A to Z)"       | name  |
      | "Name (Z to A)"       | name  |
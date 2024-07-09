Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    Then Sort the items by '<sort>'
    Then Validate all 6 items are sorted correctly by price

    Examples:
      | sort |
      | hilo |
      | lohi |

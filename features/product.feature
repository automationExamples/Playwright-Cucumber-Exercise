Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    When I sort products by "<sort>"
    Then all 6 products should be sorted correctly for "<sort>"

    Examples:
      | sort                 |
      | Price (low to high)  |
      | Price (high to low)  |
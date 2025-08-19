Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  @catalog
  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    And I sort products by "<sort>"
    Then product prices should be ordered "<sort>"

  Examples:
    | sort                |
    | Price (low to high) |
    | Price (high to low) |
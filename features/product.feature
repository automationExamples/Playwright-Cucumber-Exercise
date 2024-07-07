Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate product sort by price <sort>
    Then I will login as 'standard_user'
    And I sort the items by "<sort>"
    And I validate all 6 items are sorted correctly by "<sort>"

  Examples:
      | sort |
      |Name (A to Z)|
      |Name (Z to A)|
      |Price (low to high)|
      |Price (high to low)|
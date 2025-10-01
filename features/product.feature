Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    Then I sort the items by "<sort>"
    Then I should see all 6 items sorted by "<sort>"
    And the first item should be "<firstItem>"
    And the last item should be "<lastItem>"
    And the prices should be in "<order>" order

Examples:
  | sort                | firstItem               | lastItem                  | order      |
  | Price (low to high) | Sauce Labs Onesie       | Sauce Labs Fleece Jacket | ascending  |
  | Price (high to low) | Sauce Labs Fleece Jacket| Sauce Labs Onesie        | descending |

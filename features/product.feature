Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline: Validate product sort by price <sort>
    When I will login as 'standard_user'
    And I sort the products by "<sort>"
    Then I validate that 6 items are sorted in "<order>" price order

    Examples:
      | sort               | order      |
      | Price (low to high) | ascending  |
      | Price (high to low) | descending |

  Scenario: Validate all products and prices against JSON data
    When I will login as 'standard_user'
    Then I validate all products and prices against the JSON file
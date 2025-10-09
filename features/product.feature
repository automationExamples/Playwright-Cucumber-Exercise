Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  When I login as 'standard_user'
    # TODO: Sort the items by <sort>
    # TODO: Validate all 6 items are sorted correctly by price
    And I sort the items by "<sort>"
    Then all items are sorted by price in "<order>" order
  Examples:
    # TODO: extend the datatable to paramterize this test
      | sort                | order   |
      | Price (low to high) | asc     |
      | Price (high to low) | desc    |
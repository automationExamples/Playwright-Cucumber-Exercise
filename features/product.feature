Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the sort functionality
  Scenario Outline:  Validate product sort by <sort>
    Then I will login as 'standard_user'
    # Sort the items by <sort>
    When I sort the page by '<sort>'
    # Validate all 6 items are sorted correctly by sort criterion
    Then I should see the product list now sorted by: '<sort>'
  Examples:
    # TODO: extend the datatable to paramterize this test
    | sort |
    | lohi |
    | hilo |
    | az |
    | za |
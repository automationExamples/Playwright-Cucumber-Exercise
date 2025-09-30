Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  Then I will login using 'standard_user'
  # TODO: Sort the items by "<sort>"
  When I sort items by price "<sort>"
  # TODO: Validate all 6 items are sorted correctly by price
  Then I should see items listed by price in "<order>" order
  Examples:
    # TODO: extend the datatable to paramterize this test
    |sort|order|
    |hilo|desc |
    |lohi|asc  |
Feature: Product Feature

  Background:
    Given Open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by <sort>
  When User login as 'standard_user'
  And Sort the items by <sort>
  Then Validate all 6 items are sorted correctly by <sort>
  Examples:
    # TODO: extend the datatable to paramterize this test
    | sort |
    | Price (low to high) |
    | Price (high to low) |

Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
    When I will login as 'standard_user'
      # TODO: Sort the items by <sort>
    #When I sort products by "Price (low to high)"
    When I sort the products by "<sort_option>"
      # TODO: Validate all 6 items are sorted correctly by price
    Then All products should be sorted by "<sort_order>"
    Examples:
      # TODO: extend the datatable to paramterize this test
      | sort_option          | sort_order |
      | Price (high to low)  | htol       |
      | Price (low to high)  | ltoh       |
Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
	Then I will login as 'standard_user'
	Then I sort the products by "<sort>"
	Then I will verify the products are sorted by "<sort>"
    # TODO: Sort the items by <sort>
    # TODO: Validate all 6 items are sorted correctly by price
	Examples:
	| sort           |
	| Price (high to low) |
	| Price (low to high) |